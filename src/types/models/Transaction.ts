/* istanbul ignore file */
/* eslint-disable */

import type { GatewayInteraction } from './GatewayInteraction'

export type Transaction = {
  id?: string | null
  kiboTransactionId?: string | null
  isRecurring?: boolean
  activeCardId?: string | null
  gatewayInteractions?: Array<GatewayInteraction> | null
  createdOn?: string
  currencyCode?: string | null
}
