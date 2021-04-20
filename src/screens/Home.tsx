import { useQuery } from '@apollo/client';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gql from 'graphql-tag';
import Avatar from '../components/Avatar';
import { seeFeed_seeFeed } from '../__generated__/seeFeed';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isLiked
      isMine
    }
  }
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <div>
      {data?.seeFeed?.map((photo: seeFeed_seeFeed) => (
        <div
          key={photo.id}
          className="bg-white border border-borderColor mb-16 max-w-2xl rounded"
        >
          <div className="p-4 flex items-center border-b border-borderColor">
            <Avatar url={photo?.user?.avatar} size="8" />
            <span className="fat-text ml-4">{photo?.user?.username}</span>
          </div>
          <img src={photo.file} className="min-w-full max-w-full" alt="Post" />
          <div className="py-3 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <FontAwesomeIcon
                    icon={photo.isLiked ? SolidHeart : faHeart}
                    className={
                      photo.isLiked ? 'text-red-500 text-xl' : 'text-xl'
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
              {photo.likes === 1 ? '1 like' : `${photo.likes} likes`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
