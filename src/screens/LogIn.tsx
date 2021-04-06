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
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { logIn } from '../__generated__/logIn';

interface IForm {
  username: string;
  password: string;
  result: string;
}

const LOGIN_MUTATION = gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      success
      error
      token
    }
  }
`;

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    getValues,
    setError,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onCompleted = (data: logIn) => {
    const {
      logIn: { success, error, token },
    } = data;
    if (!success) {
      setError('result', {
        message: error,
      });
    }
  };
  const [logIn, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    logIn({
      variables: {
        username,
        password,
      },
    });
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
            value={loading ? 'Loading...' : 'Log In'}
            type="submit"
            disabled={!formState.isValid || loading}
            className="blueButton mt-3 py-2 font-semibold"
          />
          <FormError message={errors?.result?.message} />
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
