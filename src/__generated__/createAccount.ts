/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount {
  __typename: 'MutationResponse';
  success: boolean;
  error: string | undefined;
}

export interface createAccount {
  createAccount: createAccount_createAccount;
}

export interface createAccountVariables {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}