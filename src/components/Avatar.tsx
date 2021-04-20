import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarProps {
  url: string | null;
  size?:
    | '0'
    | '0.5'
    | '1'
    | '1.5'
    | '2'
    | '2.5'
    | '3'
    | '3.5'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '14'
    | '16';
}

const Avatar = ({ url = '', size = '6' }: AvatarProps) => (
  <div className={`w-${size} h-${size} rounded-full bg-black overflow-hidden`}>
    {url ? (
      <img src={url} alt="user profile" />
    ) : (
      <FontAwesomeIcon icon={faUser} size="lg" />
    )}
  </div>
);

export default Avatar;
