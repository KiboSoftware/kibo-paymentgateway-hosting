import controller from './controller'
import type { AdapterFactory } from '../types'
import type { Request, Response, Application } from 'express'
import { getPackageInfo } from '../util/app-info'

type RouteAction = {
  route: string
  action: string
}

const controllerActions: Array<RouteAction> = [
  { route: '/authorize', action: 'authorize' },
  { route: '/authorizeWithToken', action: 'authorizeWithToken' },
  { route: '/credit', action: 'credit' },
  { route: '/void', action: 'void' },
  { route: '/capture', action: 'capture' },
  { route: '/authorizeAndCapture', action: 'authorizeAndCapture' },
  { route: '/authorizeAndCaptureWithToken', action: 'authorizeAndCaptureWithToken' },
  { route: '/createGiftCard', action: 'createGiftCard' },
  { route: '/getBalance', action: 'getBalance' },
  { route: '/validateAuthTransaction', action: 'validateAuthTransaction' },
  { route: '/getAuthorizationIDKeyName', action: 'getAuthorizationIDKeyName' },
]

export default (app: Application, gatewayFactory: AdapterFactory<any>, logger: any) => {
  const defaultHandler = async (req: Request, res: Response, action: string) => {
    return controller(req, res, action, gatewayFactory, logger)
  }
  for (const controllerAction of controllerActions) {
    const { route, action } = controllerAction
    app.use(route, (req: Request, res: Response) => defaultHandler(req, res, action))
  }

  app.use('/version', (req: Request, res: Response) => {
    res.json(getPackageInfo())
  })
}
