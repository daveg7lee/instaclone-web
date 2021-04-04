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
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
  username: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    console.log('Valid', data);
  };
  const onSubmitInvalid: SubmitErrorHandler<IForm> = (data) => {
    console.log('Invalid', data);
  };
  return (
    <AuthLayout>
      <PageTitle title="Log In" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form
          className="mt-9 w-full allCenter flex-col"
          onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
        >
          <input
            ref={register({
              required: 'Username is required.',
              minLength: 5,
            })}
            name="username"
            type="text"
            placeholder="Username"
            className="input"
          />
          <input
            ref={register({
              required: 'Password is required.',
            })}
            name="password"
            type="password"
            placeholder="Password"
            className="input"
            autoComplete="on"
          />
          <input
            value="Log In"
            type="submit"
            className="w-full blueButton mt-3 py-2 font-semibold"
          />
        </form>
        <Divider />
        <div className="facebookLogin mt-2">
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          <span className="ml-2.5 font-semibold">Log in with Facebook</span>
        </div>
      </FormBox>
      <BottomBox type="logIn" />
    </AuthLayout>
  );
};

export default LogIn;
