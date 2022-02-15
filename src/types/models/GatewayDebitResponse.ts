/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionStatuses } from './ConnectionStatuses';
import type { KeyValueTuple } from './KeyValueTuple';

export type GatewayDebitResponse = {
    authCode?: string | null;
    transactionId?: string | null;
    avsCodes?: string | null;
    cvV2Codes?: string | null;
    remoteConnectionStatus?: ConnectionStatuses;
    responseText?: string | null;
    responseCode?: string | null;
    isDeclined?: boolean;
    responseData?: Array<KeyValueTuple> | null;
};
