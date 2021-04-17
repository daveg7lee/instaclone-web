import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarProps {
  url: string;
}

const Avatar = ({ url = '' }: AvatarProps) => (
  <div className="w-6 h-6 rounded-full bg-black overflow-hidden">
    {url ? (
      <img src={url} alt="user profile" />
    ) : (
      <FontAwesomeIcon icon={faUser} size="lg" />
    )}
  </div>
);

export default Avatar;
