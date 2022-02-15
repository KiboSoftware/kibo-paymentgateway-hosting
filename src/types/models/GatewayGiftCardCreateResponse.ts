/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionStatuses } from './ConnectionStatuses';
import type { KeyValueTuple } from './KeyValueTuple';

export type GatewayGiftCardCreateResponse = {
    cardNumber?: string | null;
    amount?: number;
    currencyCode?: string | null;
    transactionId?: string | null;
    isSuccessful?: boolean;
    remoteConnectionStatus?: ConnectionStatuses;
    responseText?: string | null;
    responseCode?: string | null;
    isDeclined?: boolean;
    responseData?: Array<KeyValueTuple> | null;
};
