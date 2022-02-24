import winston from 'winston'
import { Writable } from 'stream'

export default function () {
  let output = ''
  const stream = new Writable()
  stream._write = (chunk, encoding, next) => {
    output = output += chunk.toString()
    next()
  }
  const streamTransport = new winston.transports.Stream({ stream })
  const getLogs = () => output.split('\n')

  return { streamTransport, getLogs, output }
}
