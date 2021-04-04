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
import { SubmitHandler, useForm } from 'react-hook-form';
import FormError from '../components/auth/FormError';

interface IForm {
  username: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit, formState, errors } = useForm<IForm>({
    mode: 'onChange',
  });
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    //console.log('Valid', data);
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
          onSubmit={handleSubmit(onSubmitValid)}
        >
          <input
            ref={register({
              required: 'Username is required.',
              minLength: {
                value: 5,
                message: 'Username should be longer than 5 chars.',
              },
            })}
            name="username"
            type="text"
            placeholder="Username"
            className={
              Boolean(errors?.username?.message)
                ? 'input border-red-400'
                : 'input border-borderColor'
            }
          />
          <FormError message={errors?.username?.message} />
          <input
            ref={register({
              required: 'Password is required.',
            })}
            name="password"
            type="password"
            placeholder="Password"
            className={
              Boolean(errors?.password?.message)
                ? 'input border-red-400'
                : 'input border-borderColor'
            }
            autoComplete="on"
          />
          <FormError message={errors?.password?.message} />
          <input
            value="Log In"
            type="submit"
            disabled={!formState.isValid}
            className="blueButton mt-3 py-2 font-semibold"
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
