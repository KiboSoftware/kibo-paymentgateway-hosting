/* istanbul ignore file */
/* eslint-disable */

import type { KeyValueTuple } from './KeyValueTuple'
import type { TransactionType } from './TransactionType'

export type GatewayInteraction = {
  id?: number | null
  createdOn?: string
  transactionType?: TransactionType
  responseData?: Array<KeyValueTuple> | null
  isSuccessful?: boolean
  cardId?: string | null
  amount?: number
  isDeleted?: boolean
}
