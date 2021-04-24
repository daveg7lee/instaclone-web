import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Photo from '../components/Feed/Photo';
import PageTitle from '../components/PageTitle';
import { seeFeed_seeFeed } from '../__generated__/seeFeed';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../fragments';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      <PageTitle title="Home" />
      {data?.seeFeed?.map((photo: seeFeed_seeFeed) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default Home;
