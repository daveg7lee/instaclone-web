/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createComment
// ====================================================

export interface createComment_createComment {
  __typename: "MutationResponse";
  success: boolean;
  error: string | null;
  id: number | null;
}

export interface createComment {
  createComment: createComment_createComment | null;
}

export interface createCommentVariables {
  photoId: number;
  payload: string;
}
