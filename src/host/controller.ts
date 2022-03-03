import { Request, Response } from 'express'
import type { AdapterFactory, AdapterContext } from '../types'

export default async function (
  req: Request,
  resp: Response,
  action: string,
  factory: AdapterFactory<any>,
  logger: any
) {
  const context: AdapterContext = req.body.context
  const service: any = factory.createAdapter(context, logger)

  try {
    const body: any = await service[action](req.body)
    resp.send(body)
  } catch (e: any) {
    // resp.statusCode = 501
    resp.statusMessage = e.message ?? e.toString()
    resp.sendStatus(501)
    // ducktype check for error
    // check if error type
  }
}
