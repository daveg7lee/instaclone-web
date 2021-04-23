import { useMutation, gql } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION
  );
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid: SubmitHandler<IForm> = async ({ payload }) => {
    if (loading) {
      return;
    }
    createCommentMutation({
      variables: { photoId, payload },
    });
    setValue('payload', '');
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
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            type="text"
            placeholder="Write a comment..."
            name="payload"
            ref={register({ required: 'payload is required' })}
          />
        </form>
      </div>
    </div>
  );
};

export default Comments;
