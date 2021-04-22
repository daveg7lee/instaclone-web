interface CommentProps {
  author: string | undefined;
  payload: string | undefined;
}

const Comment = ({ author, payload }: CommentProps) => (
  <div>
    <span className="fat-text">{author}</span>
    <span className="ml-3">{payload}</span>
  </div>
);

export default Comment;
