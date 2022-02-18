import controller from './controller'
import type { AdapterFactory } from '../types'

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
]

export default (app: any, gatewayFactory: AdapterFactory, logger: any) => {
  const defaultHandler = async (req: any, res: any, action: string) => {
    return controller(req, res, action, gatewayFactory, logger)
  }
  for (const controllerAction of controllerActions) {
    const { route, action } = controllerAction
    app.use(route, (req: any, res: any) => defaultHandler(req, res, action))
  }
}
