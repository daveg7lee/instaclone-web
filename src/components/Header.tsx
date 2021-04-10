import { useReactiveVar } from '@apollo/client';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isLoggedInVar } from '../apollo';

function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <header className="w-full border-b border-borderColor bg-bgColor py-4 allCenter">
      <div className="max-w-instaWidth w-full flex justify-between items-center">
        <div>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
        <div>
          {isLoggedIn ? (
            <>
              <span className="icon">
                <FontAwesomeIcon icon={faHome} size="lg" />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </span>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
export default Header;
