import { useMutation, gql } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import useUser from '../../hooks/useUser';
import { seeFeed_seeFeed_comments } from '../../__generated__/seeFeed';
import Comment from './Comment';

interface CommentsProps {
  author: string;
  caption: string | null;
  commentNumbers: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
  photoId: number;
}

interface IForm {
  payload: string;
}

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      success
      error
      id
    }
  }
`;

const Comments = ({
  author,
  caption,
  commentNumbers,
  comments,
  photoId,
}: CommentsProps) => {
  const { data: userData } = useUser();
  const { register, handleSubmit, setValue, getValues } = useForm<IForm>();
  const createCommentUpdate = (
    cache: any,
    {
      data: {
        createComment: { success, id },
      },
    }: any
  ) => {
    const { payload } = getValues();
    setValue('payload', '');
    if (success && userData?.me) {
      const newComment = {
        __typename: 'Comment',
        createdAt: Date.now(),
        id,
        isMine: true,
        payload,
        user: {
          ...userData.me,
        },
      };
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          comments(prev: seeFeed_seeFeed_comments[]) {
            return [...prev, newComment];
          },
          commentNumbers(prev: number) {
            return prev + 1;
          },
        },
      });
    }
  };
  const [
    createCommentMutation,
    { loading },
  ] = useMutation(CREATE_COMMENT_MUTATION, { update: createCommentUpdate });
  const onValid: SubmitHandler<IForm> = async ({ payload }) => {
    if (loading) {
      return;
    }
    createCommentMutation({
      variables: { photoId, payload },
    });
  };
  return (
    <div className="mt-5">
      <Comment author={author} payload={caption} />
      <span className="opacity-70 text-xs py-3 block font-semibold">
        {commentNumbers === 1 ? '1 comment' : `${commentNumbers} comments`}
      </span>
      {comments?.map((comment) => {
        if (comment) {
          return (
            <Comment
              key={comment.id}
              author={comment.user.username}
              payload={comment.payload}
            />
          );
        }
        return null;
      })}
      <div className="mt-2.5 pt-3.5 pb-2.5 border-t border-borderColor">
        <form onSubmit={handleSubmit(onValid)}>
          <input
            type="text"
            placeholder="Write a comment..."
            name="payload"
            ref={register({ required: 'payload is required' })}
            className="w-full focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Comments;
