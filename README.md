# Node.js Payment Extensibility Host Pacakge

This is an example payment gateway adapter that can be used with the Kibo UCP. The main branch of this repo should always work as a No-Op gateway so that you can start with a working app and develop from there.

## Configuration

### Implement the PaymentGatwayAdapter interface

```
import type { PaymentGatwayAdapter, AdapterContext, GatewayAuthorizationRequest, GatewayAuthorizeResponse } from "@kibocommerce/kibo-paymentgateway-hosting";

class MyService implements PaymentGatwayAdapter {
  context: AdapterContext;
  logger: any;
  constructor(context: AdapterContext, logger: any) {
    this.context = context;
    this.logger = logger;
  }
  async authorize(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayAuthorizeResponse> {
    return {
        authCode:"go"
    }
  }
  ...
}

```

### Create a factory

```
import type { AdapterFactory} from "@kibocommerce/kibo-paymentgateway-hosting";
class MyFactory implements AdapterFactory {
  createAdapter(context: AdapterContext, logger: any): PaymentGatwayAdapter {
    return new MyService(context, logger);
  }
}
```

### Pass the factory to the host

```
import host from "@kibocommerce/kibo-paymentgateway-hosting"

host(factory);
```

### Serverless Hosting

For Dev or QA purposes, this package can be deployed to serverless environments using any module that can wrap an NodeJS Express application for serverless use, such as [Serverless Http](https://github.com/vendia/serverless-express) or [Serverless Express](https://github.com/vendia/serverless-express)

You will need to pass your gateway adapter factory to the `createHost` function that will return an Express application.

```js
import { createHost } from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomAdapterFactory } from './CustomAdapterFactory'
// create your paymentgateway adapter factory
const factory = new CustomAdapterFactory()
// create express app instance with factory
const app = createHost(factory)
```

Once you have the app instance, follow the steps to whichever serverless express module you are using

```js
// lambda.js
import serverless from 'serverless-http'
import { createHost } from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomAdapterFactory } from './CustomAdapterFactory'
// create your paymentgateway adapter factory
const factory = new CustomAdapterFactory()
// create express app instance with factory
const app = createHost(factory)
// wrap app in serverless-http handler
const serverlessHandler = serverless(app)

export const handler = serverlessHandler
```

```js
//lambda.js
const kiboPaymentGatewayHost = require('@kibocommerce/kibo-paymentgateway-hosting')
const serverlessExpress = require('@vendia/serverless-express')
const CustomAdapterFactory = require('./CustomAdapterFactory')
const factory = new CustomAdapterFactory()
const app = kiboPaymentGatewayHost.createHost(factory)
exports.handler = serverlessExpress({ app })
```
