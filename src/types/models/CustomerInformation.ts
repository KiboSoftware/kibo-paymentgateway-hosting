/* istanbul ignore file */
/* eslint-disable */

import type { Address } from './Address'
import type { Contact } from './Contact'
import type { KeyValueTuple } from './KeyValueTuple'

export type CustomerInformation = {
  address?: Address
  contact?: Contact
  requestorIp?: string | null
  requestorUrl?: string | null
  requestorUserAgent?: string | null
  currencyCode?: string | null
  customerId?: string | null
  phoneNumber?: string | null
  extendedInfo?: Array<KeyValueTuple> | null
}
