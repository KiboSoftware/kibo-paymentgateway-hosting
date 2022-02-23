# Node.js Payment Extensibility Host Pacakge

This is an example payment gateway adapter that can be used with the Kibo UCP.  The main branch of this repo should always work as a No-Op gateway so that you can start with a working app and develop from there.

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
### Creeate a factory
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

