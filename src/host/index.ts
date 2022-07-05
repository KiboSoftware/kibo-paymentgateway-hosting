import 'dotenv/config'
import express from 'express'
import type { Express } from 'express'
import type { Server } from 'http'
import correlator from 'express-correlation-id'
import type { AdapterFactory } from '../types'
import route from './router'
import createLogger from '../util/logger'
import loggerMiddleware from '../util/logger-middleware'

export const createHost = (factory: AdapterFactory<any>): Express => {
  // register the app
  const app = express()
  // create service logger
  const logger = createLogger()
  // json is required by the platform
  app.use(express.json({ limit: '16MB' }))
  // setup request correlation id middleware
  app.use(correlator({ header: 'x-vol-correlation-id' }))
  // setup access/request logger
  app.use(loggerMiddleware())
  // registering routes for express
  route(app, factory, logger)
  // return the app
  return app
}
export default (factory: AdapterFactory<any>): Server => {
  // create the express app
  const app = createHost(factory)
  // app runs on port 3000 by default. You can change this by editing this value
  const port = process.env.PORT || 3000
  // run the application
  const server = app.listen(port, () =>
    createLogger().info(`Example payment gateway app listening on port ${port}!`)
  )
  return server
}
