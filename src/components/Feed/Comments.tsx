import { seeFeed_seeFeed_comments } from '../../__generated__/seeFeed';
import Comment from './Comment';

interface CommentsProps {
  author: string;
  caption: string | undefined;
  commentNumbers: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
}

const Comments = ({
  author,
  caption,
  commentNumbers,
  comments,
}: CommentsProps) => (
  <div className="mt-5">
    <Comment author={author} payload={caption} />
    <span className="opacity-70 text-xs py-3 block font-semibold">
      {commentNumbers === 1 ? '1 comment' : `${commentNumbers} comments`}
    </span>
    {comments?.map((comment) => (
      <Comment
        key={comment?.id}
        author={comment?.user.username}
        payload={comment?.payload}
      />
    ))}
  </div>
);

export default Comments;
