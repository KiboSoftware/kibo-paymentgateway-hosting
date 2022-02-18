/* istanbul ignore file */
/* eslint-disable */

import type { ConnectionStatuses } from './ConnectionStatuses'
import type { KeyValueTuple } from './KeyValueTuple'

export type GatewayGetGiftCardBalanceResponse = {
  balance?: number | null
  remoteConnectionStatus?: ConnectionStatuses
  responseText?: string | null
  responseCode?: string | null
  isDeclined?: boolean
  responseData?: Array<KeyValueTuple> | null
}
