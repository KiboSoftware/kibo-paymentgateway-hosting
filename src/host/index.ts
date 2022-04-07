import 'dotenv/config'
import express from 'express'
import type { Server } from 'http'
import correlator from 'express-correlation-id'
import type { AdapterFactory } from '../types'
import route from './router'
import createLogger from '../util/logger'
import loggerMiddleware from '../util/logger-middleware'

export default (factory: AdapterFactory<any>): Server => {
  // register the app
  const app = express()
  // create service logger
  const logger = createLogger()
  // app runs on port 3000 by default. You can change this by editing this value
  const port = process.env.PORT || 3000

  // json is required by the platform
  app.use(express.json())
  // setup request correlation id middleware
  app.use(correlator({ header: 'x-vol-correlation-id' }))
  // setup access/request logger
  app.use(loggerMiddleware())
  // registering routes for express
  route(app, factory, logger)
  // run the application
  const server = app.listen(port, () =>
    logger.info(`Example payment gateway app listening on port ${port}!`)
  )

  return server
}
