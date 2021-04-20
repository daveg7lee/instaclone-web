import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Photo from '../components/Feed/Photo';
import PageTitle from '../components/PageTitle';
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
  return (
    <div>
      <PageTitle title="Home | Instaclone" />
      {data?.seeFeed?.map((photo: seeFeed_seeFeed) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default Home;
