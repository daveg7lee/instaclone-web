import { gql, useQuery } from '@apollo/client';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { PHOTO_FRAGMENT } from '../fragments';
import { seeProfile_seeProfile_photos } from '../__generated__/seeProfile';

interface paramsType {
  username: string;
}

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
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
      <div className="flex">
        <img
          src={data?.seeProfile?.avatar}
          alt="User Profile"
          className="ml-12 h-40 w-40 rounded-full mr-36 bg-gray-700"
        />
        <div>
          <div className="row">
            <h3 className="text-2xl">{data?.seeProfile?.username}</h3>
          </div>
          <div className="row">
            <ul className="flex">
              <li className="mr-5">
                <span className="fat-text text-xl">
                  {data?.seeProfile?.totalFollowers}
                </span>{' '}
                followers
              </li>
              <li className="mr-5">
                <span className="fat-text text-xl">
                  {data?.seeProfile?.totalFollowing}
                </span>{' '}
                following
              </li>
            </ul>
          </div>
          <div className="row">
            <p className="fat-text">
              {data?.seeProfile?.firstName}
              {'  '}
              {data?.seeProfile?.lastName}
            </p>
          </div>
          <div className="row">{data?.seeProfile?.bio}</div>
        </div>
      </div>
      <div className="grid auto-rows-290px grid-cols-3 gap-8 mt-12">
        {data?.seeProfile?.photos.map((photo: seeProfile_seeProfile_photos) => (
          <div
            className="relative bg-cover"
            style={{ backgroundImage: `url(${photo.file})` }}
          >
            <div className="absolute allCenter w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-all duration-100">
              <span className="text-lg flex items-center mx-1">
                <FontAwesomeIcon icon={faHeart} className="text-sm mr-1" />
                {photo.likes}
              </span>
              <span className="text-lg flex items-center mx-1">
                <FontAwesomeIcon icon={faComment} className="text-sm mr-1" />
                {photo.commentNumbers}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
