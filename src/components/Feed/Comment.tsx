import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { Link } from 'react-router-dom';

interface CommentProps {
  author: string | undefined;
  payload: string | null;
  id?: number;
  isMine?: Boolean;
  photoId?: number;
}

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      success
    }
  }
`;

const Comment = ({ author, payload, id, isMine, photoId }: CommentProps) => {
  const deleteCommentUpdate = (
    cache: any,
    {
      data: {
        deleteComment: { success },
      },
    }: any
  ) => {
    if (success) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumbers(prev: number) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: { id },
    update: deleteCommentUpdate,
  });
  return (
    <div className="mb-2">
      <span className="fat-text">{author}</span>
      <span className="ml-3">
        {payload?.split(' ').map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`} className="font-normal">
                {word}
              </Link>{' '}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              {/@[\w]+/.test(word) ? (
                <>
                  <Link to={`/user/${word}`} className="font-normal">
                    {word}
                  </Link>{' '}
                </>
              ) : (
                <>{word} </>
              )}
            </React.Fragment>
          )
        )}
      </span>
      {isMine && <button onClick={() => deleteCommentMutation()}>❌</button>}
    </div>
  );
};

export default Comment;
