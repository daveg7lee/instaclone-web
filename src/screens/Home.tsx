import { useQuery } from '@apollo/client';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
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
    }
  }
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((photo: seeFeed_seeFeed) => (
        <div
          key={photo.id}
          className="bg-white border border-borderColor mb-5 max-w-2xl"
        >
          <div className="p-4 flex items-center">
            <Avatar url={photo?.user?.avatar} size="8" />
            <span className="fat-text ml-4">{photo?.user?.username}</span>
          </div>
          <img src={photo.file} className="min-w-full" alt="Post" />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <FontAwesomeIcon icon={faHeart} size="2x" />
                </div>
                <div className="mr-3">
                  <FontAwesomeIcon icon={faComment} size="2x" />
                </div>
                <div className="mr-3">
                  <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faBookmark} size="2x" />
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
