import createLogger, { redactPciMessage } from '../../../src/util/logger'
import streamTransportHelper from '../../helpers/winson-stream-transport'

describe('Kibo PaymentGateway Hosting - Logger', () => {
  it('should not mutate message using transform function', () => {
    const info = { level: 'info', message: 'this log message is ok!' }
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(info)
  })

  it('should set message to redacted for containing 16 digit number', () => {
    const info = { level: 'info', message: 'Your card number is 4111111111111111' }
    const expectMessage = false
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(expectMessage)
  })

  it('should set message to redacted for containing 15 digit number', () => {
    const info = { level: 'info', message: 'Your card number is 4111111111111111' }
    const expectMessage = false
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(expectMessage)
  })

  it('should set message to redacted for containing 16 digit number with hypens', () => {
    const info = { level: 'info', message: 'Your card number is 4111-1111-1111-1111' }
    const expectMessage = false
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(expectMessage)
  })

  it('should not redact a GUID with more than 16 numberic characters', () => {
    const info = {
      level: 'info',
      message: 'Your random guid is 309091E0-231A-43E1-AE32-52347E85C7F4',
    }
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(info)
  })

  it('should not redact a message with 16 digits interspaced with other alphabetic characters', () => {
    const info = { level: 'info', message: 'Id 4242, User 4242, Code 4242, Country 4242' }
    const resultInfo = redactPciMessage(info)
    expect(resultInfo).toEqual(info)
  })

  it('should log json formatted info level message', () => {
    const expected = `{"level":"info","message":"this is a log message"}`

    const { streamTransport, getLogs } = streamTransportHelper()

    const logger = createLogger({ transports: [streamTransport] })
    logger.info('this is a log message')
    const logs = getLogs()
    expect(logs[0]).toEqual(expected)
  })
  it('should redact winston log message for containing 16 digit number', () => {
    const expected = ''

    const { streamTransport, getLogs } = streamTransportHelper()

    const logger = createLogger({ transports: [streamTransport] })
    logger.info('Your card number is 4111111111111111')
    const logs = getLogs()
    expect(logs[0]).toEqual(expected)
  })

  it('should redact winston log message for logging object containing 16 digit number', () => {
    const expected = ''

    const { streamTransport, getLogs } = streamTransportHelper()

    const logger = createLogger({ transports: [streamTransport] })
    logger.info({ cardNumber: '4111111111111111' })
    const logs = getLogs()
    expect(logs[0]).toEqual(expected)
  })
})
