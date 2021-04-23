/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: logIn
// ====================================================

export interface logIn_logIn {
  __typename: 'MutationResponse';
  success: boolean;
  error: string | undefined;
  token: string | null;
}

export interface logIn {
  logIn: logIn_logIn;
}

export interface logInVariables {
  username: string;
  password: string;
}
