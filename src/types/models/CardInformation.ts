/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CardInformation = {
    id?: string | null;
    numberPart?: string | null;
    cvv?: string | null;
    expireYear?: number;
    expireMonth?: number;
    type?: string | null;
    cardHolderName?: string | null;
    cardIssueMonth?: number;
    cardIssueYear?: number;
    cardIssueNumber?: string | null;
    persistCard?: boolean;
};
