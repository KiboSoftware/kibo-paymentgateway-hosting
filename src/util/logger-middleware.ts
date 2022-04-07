import expressWinston from 'express-winston'
import correlator from 'express-correlation-id'
import winston from 'winston'
type LoggerMeta = {
  correlationId: string | undefined
}
export default function (): any {
  return expressWinston.logger({
    dynamicMeta: function (req) {
      const meta: LoggerMeta = { correlationId: undefined }
      if (req) {
        const requestId = correlator.getId()
        meta.correlationId = requestId
      }
      return meta
    },
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json()),
    expressFormat: true,
    colorize: false,
  })
}
