import sanitizeHtml from 'sanitize-html';

interface CommentProps {
  author: string | undefined;
  payload: string | undefined;
}

const Comment = ({ author, payload }: CommentProps) => {
  let cleanedPayload: string = '';
  if (payload) {
    cleanedPayload = sanitizeHtml(
      payload.replace(/#[\w]+/g, '<mark>$&</mark>'),
      {
        allowedTags: ['mark'],
      }
    );
  }
  return (
    <div>
      <span className="fat-text">{author}</span>
      <span
        className="ml-3"
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      />
    </div>
  );
};

export default Comment;
