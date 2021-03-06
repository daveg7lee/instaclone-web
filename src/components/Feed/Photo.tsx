import { useMutation } from '@apollo/client';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { seeFeed_seeFeed } from '../../__generated__/seeFeed';
import Avatar from '../Avatar';
import Comments from './Comments';

interface FeedProps {
  photo: seeFeed_seeFeed;
}

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      success
      error
    }
  }
`;

const Photo = ({
  photo: { id, user, file, isLiked, likes, caption, commentNumbers, comments },
}: FeedProps) => {
  const updateToggleLike = (cache: any, result: any) => {
    const {
      data: {
        toggleLike: { success },
      },
    } = result;
    if (success) {
      const photoId = `Photo:${id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev: boolean) {
            return !prev;
          },
          likes(prev: number) {
            if (isLiked) {
              return prev - 1;
            }
            return prev + 1;
          },
        },
      });
    }
  };
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: { id },
    update: updateToggleLike,
  });
  const onClick = async () => {
    await toggleLikeMutation();
  };
  return (
    <div className="bg-white border border-borderColor mb-16 max-w-2xl rounded">
      <div className="p-4 flex items-center border-b border-borderColor">
        <Link to={`/users/${user.username}`} className="text-black">
          <Avatar url={user.avatar} size="8" />
        </Link>
        <Link to={`/users/${user.username}`} className="text-black">
          <span className="fat-text ml-4">{user.username}</span>
        </Link>
      </div>
      <img src={file} className="min-w-full max-w-full" alt="Post" />
      <div className="py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 cursor-pointer" onClick={onClick}>
              <FontAwesomeIcon
                icon={isLiked ? SolidHeart : faHeart}
                className={
                  isLiked ? 'text-red-500 text-xl hover-opacity' : 'text-xl'
                }
              />
            </div>
            <div className="mr-3">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
            </div>
            <div className="mr-3">
              <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} className="text-xl" />
          </div>
        </div>
        <span className="fat-text mt-4 block">
          {likes === 1 ? '1 like' : `${likes} likes`}
        </span>
        <Comments
          author={user.username}
          caption={caption}
          commentNumbers={commentNumbers}
          comments={comments}
          photoId={id}
        />
      </div>
    </div>
  );
};

export default Photo;
