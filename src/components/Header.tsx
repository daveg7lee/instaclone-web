import { useReactiveVar } from '@apollo/client';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { isLoggedInVar } from '../apollo';
import useUser from '../hooks/useUser';
import routes from '../routes';
import Avatar from './Avatar';

function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useUser();
  return (
    <header className="w-full border-b border-borderColor bg-bgColor py-4 allCenter">
      <div className="max-w-instaWidth w-full flex justify-between items-center">
        <div>
          <Link to={routes.home} className="text-black">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <div className="flex items-center">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} size="lg" />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </span>
              <Link to={`/users/${data?.me?.username}`} className="icon">
                <Avatar url={data?.me?.avatar} />
              </Link>
            </div>
          ) : (
            <Link to={routes.home}>
              <span className="blueButton font-semibold px-4">Log In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
