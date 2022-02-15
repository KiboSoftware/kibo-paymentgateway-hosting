import { Request, Response, NextFunction } from "express";
import { AdapterFactory, AdapterContext } from "../types/index";

export default async function (
  req: Request,
  resp: Response,
  action: string,
  factory: AdapterFactory,
  logger: any
) {
  const childLogger = logger.child({ CorrelationId: "451", TenantId: 234 });
  const context: AdapterContext = req.body.context;
  const service: any = factory.createAdapter(context, logger);

  try {
    const body: any = await service[action](req);
    resp.send(body);
  } catch (e: any) {
    // resp.statusCode = 501
    resp.statusMessage = e.message ?? e.toString();
    resp.sendStatus(501);
    // ducktype check for error
    // check if error type
  }
}
