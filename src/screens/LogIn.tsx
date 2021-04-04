import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Divider from '../components/auth/Divider';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';
import Input from '../components/auth/Input';
import FormBox from '../components/auth/FormBox';
import BottomBox from '../components/auth/BottomBox';

const LogIn = () => {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form className="mt-9 w-full allCenter flex-col">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button value="Log In" type="submit" />
        </form>
        <Divider />
        <div className="facebookLogin">
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          <span className="ml-2.5 font-semibold">Log in with Facebook</span>
        </div>
      </FormBox>
      <BottomBox type="logIn" />
    </AuthLayout>
  );
};

export default LogIn;
