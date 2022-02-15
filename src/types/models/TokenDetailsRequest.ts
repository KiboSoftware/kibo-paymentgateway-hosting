/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdapterContext } from './AdapterContext';
import type { CardInformation } from './CardInformation';
import type { CustomerInformation } from './CustomerInformation';
import type { PaymentToken } from './PaymentToken';

export type TokenDetailsRequest = {
    apiVersion?: string | null;
    methodName?: string | null;
    shopper?: CustomerInformation;
    card?: CardInformation;
    token?: PaymentToken;
    context?: AdapterContext;
    data?: any;
};
