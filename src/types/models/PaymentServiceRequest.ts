/* istanbul ignore file */
/* eslint-disable */

import type { AdapterContext } from './AdapterContext'

export interface PaymentServiceRequest {
  apiVersion?: string | null
  context?: AdapterContext
  data?: any
}
