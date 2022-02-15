/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdapterContext } from '../models/AdapterContext';
import type { CaptureRequest } from '../models/CaptureRequest';
import type { CreditRequest } from '../models/CreditRequest';
import type { GatewayAuthorizationRequest } from '../models/GatewayAuthorizationRequest';
import type { GatewayAuthorizeResponse } from '../models/GatewayAuthorizeResponse';
import type { GatewayCaptureResponse } from '../models/GatewayCaptureResponse';
import type { GatewayCreditResponse } from '../models/GatewayCreditResponse';
import type { GatewayDebitResponse } from '../models/GatewayDebitResponse';
import type { GatewayGetGiftCardBalanceRequest } from '../models/GatewayGetGiftCardBalanceRequest';
import type { GatewayGetGiftCardBalanceResponse } from '../models/GatewayGetGiftCardBalanceResponse';
import type { GatewayGiftCardCreateRequest } from '../models/GatewayGiftCardCreateRequest';
import type { GatewayGiftCardCreateResponse } from '../models/GatewayGiftCardCreateResponse';
import type { GatewayVoidResponse } from '../models/GatewayVoidResponse';



export interface AdapterFactory {
    createAdapter(context:AdapterContext ,logger:any ):PaymentGatwayAdapter
}

export interface PaymentGatwayAdapter  {    
    authorize(request:GatewayAuthorizationRequest):Promise<GatewayAuthorizeResponse>
    authorizeWithToken(request:GatewayAuthorizationRequest):Promise<GatewayAuthorizeResponse>
    capture(request:CaptureRequest):Promise<GatewayCaptureResponse>
    credit(request:CreditRequest):Promise<GatewayCreditResponse>    
    void(request:CaptureRequest):Promise<GatewayVoidResponse>
    authorizeAndCapture(request:GatewayAuthorizationRequest):Promise<GatewayDebitResponse>
    authorizeAndCaptureWithToken(request:GatewayAuthorizationRequest):Promise<GatewayDebitResponse>
    createGiftCard(request:GatewayGiftCardCreateResponse):Promise<GatewayGiftCardCreateRequest>
    getBalance(request:GatewayGetGiftCardBalanceRequest):Promise<GatewayGetGiftCardBalanceResponse>      
};
