import React from 'react';
import { Link } from 'react-router-dom';

interface CommentProps {
  author: string | undefined;
  payload: string | null;
}

const Comment = ({ author, payload }: CommentProps) => {
  return (
    <div>
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
    </div>
  );
};

export default Comment;
