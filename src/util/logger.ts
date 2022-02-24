import winston, { format } from 'winston'
import type { LoggerOptions } from 'winston'
import type { TransformFunction } from 'logform'

const potentiallyPrivatePattern = /4(?:\D*\d){13,16}/
const shouldRedactLog = (message: string | Record<string, unknown>) => {
  const str = typeof message === 'object' ? JSON.stringify(message) : message
  return str.match(potentiallyPrivatePattern) ? true : false
}

export const redactPciMessage: TransformFunction = (info) => {
  const { message, ...otherInfo } = info
  if (shouldRedactLog(message)) {
    return false
  }
  return {
    message,
    ...otherInfo,
  }
}

export default function (options?: LoggerOptions) {
  const pciMessageFormat = format(redactPciMessage)
  const transports = options?.transports ? options.transports : [new winston.transports.Console()]
  return winston.createLogger({
    level: 'info',
    format: format.combine(pciMessageFormat(), winston.format.json()),
    exceptionHandlers: [new winston.transports.Console()],
    transports,
  })
}
