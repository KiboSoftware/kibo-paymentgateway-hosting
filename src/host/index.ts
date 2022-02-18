import 'dotenv/config'
import express from 'express'
import winston from 'winston'
import type { AdapterFactory } from '../types'
import route from './router'

export default (factory: AdapterFactory) => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  })
  // register the app
  const app = express()

  // app runs on port 3000 by default. You can change this by editing this value
  const port = process.env.PORT || 3000

  // json is required by the platform
  app.use(express.json())

  // registering routes for express
  route(app, factory, logger)
  // run the application
  app.listen(port, () => logger.info(`Example payment gateway app listening on port ${port}!`))

  return app
}
