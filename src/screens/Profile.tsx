import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { PHOTO_FRAGMENT } from '../fragments';

interface paramsType {
  username: string;
}

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      id
      firstName
      lastName
      username
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalFollowers
      totalFollowing
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;

const Profile = () => {
  const { username } = useParams<paramsType>();
  const { data } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      username,
    },
  });
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
