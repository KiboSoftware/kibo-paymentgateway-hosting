/* istanbul ignore file */
/* eslint-disable */

export enum TransactionType {
  Sale = 'Sale',
  Authorize = 'Authorize',
  Capture = 'Capture',
  Force = 'Force',
  Credit = 'Credit',
  Void = 'Void',
  AuthorizeAndCapture = 'AuthorizeAndCapture',
  Information = 'Information',
  Init3dSecure = 'Init3dSecure',
  Finalize3dSecure = 'Finalize3dSecure',
  FraudScreen = 'FraudScreen',
  Debit = 'Debit',
}
