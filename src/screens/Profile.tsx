import { gql, useMutation, useQuery } from '@apollo/client';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import PageTitle from '../components/PageTitle';
import { PHOTO_FRAGMENT } from '../fragments';
import {
  seeProfile_seeProfile,
  seeProfile_seeProfile_photos,
} from '../__generated__/seeProfile';

interface paramsType {
  username: string;
}

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($username: String!) {
    followUser(username: $username) {
      success
    }
  }
`;
const UNFOLLOW_USER_MUTATION = gql`
  mutation unfollowUser($username: String!) {
    unfollowUser(username: $username) {
      success
    }
  }
`;

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
  const { data, loading } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      username,
    },
  });
  const unfollowUserUpdate = (cache: any, result: any) => {
    const {
      data: {
        unfollowUser: { success },
      },
    } = result;
    if (!success) {
      return;
    }
    cache.modify({
      id: `User:${username}`,
      fields: {
        isFollowing() {
          return false;
        },
        totalFollowers(prev: number) {
          return prev - 1;
        },
      },
    });
  };
  const followUserUpdate = (cache: any, result: any) => {
    const {
      data: {
        followUser: { success },
      },
    } = result;
    if (!success) {
      return;
    }
    cache.modify({
      id: `User:${username}`,
      fields: {
        isFollowing() {
          return true;
        },
        totalFollowers(prev: number) {
          return prev + 1;
        },
      },
    });
  };
  const [unfollowUser] = useMutation(UNFOLLOW_USER_MUTATION, {
    variables: {
      username,
    },
    update: unfollowUserUpdate,
  });
  const [followUser] = useMutation(FOLLOW_USER_MUTATION, {
    variables: {
      username,
    },
    update: followUserUpdate,
  });
  const getButton = (seeProfile: seeProfile_seeProfile) => {
    const { isMe, isFollowing } = seeProfile;
    if (isMe) {
      return (
        <span className="blueButton ml-2.5 mt-0 cursor-pointer">
          Edit Profile
        </span>
      );
    }
    if (isFollowing) {
      return (
        <span
          className="blueButton ml-2.5 mt-0 cursor-pointer"
          onClick={() => unfollowUser()}
        >
          Unfollow
        </span>
      );
    } else {
      return (
        <span
          className="blueButton ml-2.5 mt-0 cursor-pointer"
          onClick={() => followUser()}
        >
          Follow
        </span>
      );
    }
  };
  return (
    <div>
      <PageTitle
        title={
          loading ? 'Loading...' : `${data?.seeProfile?.username}'s Profile`
        }
      />
      <div className="flex">
        <img
          src={data?.seeProfile?.avatar}
          alt="User Profile"
          className="ml-12 h-40 w-40 rounded-full mr-36 bg-gray-700"
        />
        <div>
          <div className="row items-center">
            <h3 className="text-2xl">{data?.seeProfile?.username}</h3>
            {data?.seeProfile ? getButton(data.seeProfile) : null}
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
            key={photo.id}
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
