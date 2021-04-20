import { useQuery } from '@apollo/client';
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
        <div key={photo.id} className="bg-white border border-borderColor mb-5">
          <div className="py-1 px-3 flex items-center">
            <Avatar url={photo?.user?.avatar} />
            <span className="fat-text ml-2">{photo?.user?.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
