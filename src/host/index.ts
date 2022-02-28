import 'dotenv/config'
import express from 'express'
import type { AdapterFactory } from '../types'
import route from './router'
import createLogger from '../util/logger'

export default (factory: AdapterFactory) => {
  // register the app
  const app = express()
  // create logger
  const logger = createLogger()
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
