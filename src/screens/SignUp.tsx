import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Divider from '../components/auth/Divider';
import AuthLayout from '../components/auth/AuthLayout';
import FormBox from '../components/auth/FormBox';
import BottomBox from '../components/auth/BottomBox';
import PageTitle from '../components/PageTitle';

const SignUp = () => {
  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <div className="allCenter flex-col">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <span className="FatLink text-center my-2.5">
            Sign up to see photos and videos from your friends
          </span>
        </div>
        <div className="blueButton w-full py-1.5 font-semibold">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span className="ml-1.5">Log in with Facebook</span>
        </div>
        <Divider />
        <form className="w-full allCenter flex-col">
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Full Name" className="input" />
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input
            value="Sign Up"
            type="submit"
            className="w-full blueButton mt-3 py-2 font-semibold"
          />
        </form>
      </FormBox>
      <BottomBox type="signUp" />
    </AuthLayout>
  );
};

export default SignUp;
