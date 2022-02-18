/* istanbul ignore file */
/* eslint-disable */

import type { KeyValueTuple } from './KeyValueTuple'
import type { Transaction } from './Transaction'

export type AdapterContext = {
  settings?: Array<KeyValueTuple> | null
  isSandbox?: boolean
  isTestMode?: boolean
  configuration?: Array<KeyValueTuple> | null
  transaction?: Transaction
  previousTransactions?: Array<Transaction> | null
}
