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
import { gql, useMutation } from '@apollo/client';
import FormError from '../components/auth/FormError';
import { createAccount } from '../__generated__/createAccount';
import { useHistory } from 'react-router';
import routes from '../routes';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  result: string;
}

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      success
      error
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    formState,
    setError,
    clearErrors,
    getValues,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onCompleted = (data: createAccount) => {
    const { username, password } = getValues();
    const {
      createAccount: { success, error },
    } = data;
    if (!success) {
      return setError('result', {
        message: error,
      });
    }
    history.push(routes.home, {
      message: 'Account Created, Please Log In',
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  const clearLogInError = () => {
    clearErrors('result');
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <div className="allCenter flex-col">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
          <span className="FatLink text-center my-2.5">
            Sign up to see photos and videos from your friends
          </span>
        </div>
        <div className="blueButton w-full py-1.5 font-semibold">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span className="ml-1.5">Log in with Facebook</span>
        </div>
        <Divider />
        <form
          className="w-full allCenter flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            ref={register({ required: 'email is required' })}
            name="email"
            type="email"
            placeholder="Email"
            className="input border-borderColor"
            onChange={clearLogInError}
          />
          <FormError message={errors?.email?.message} />
          <input
            ref={register({ required: 'First name is required' })}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input border-borderColor"
          />
          <FormError message={errors?.firstName?.message} />
          <input
            ref={register}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input border-borderColor"
          />
          <FormError message={errors?.lastName?.message} />
          <input
            ref={register({
              required: 'Username is required',
              minLength: {
                value: 4,
                message: 'Username should be longer than 4 chars.',
              },
            })}
            type="text"
            name="username"
            placeholder="Username"
            className="input border-borderColor"
            onChange={clearLogInError}
          />
          <FormError message={errors?.username?.message} />
          <input
            ref={register({ required: 'Password is required' })}
            name="password"
            type="password"
            placeholder="Password"
            className="input border-borderColor"
            autoComplete="on"
          />
          <FormError message={errors?.password?.message} />
          <input
            value={loading ? 'Loading...' : 'Sign Up'}
            disabled={!formState.isValid || loading}
            className="blueButton mt-3 py-2 font-semibold"
            type="submit"
          />
          <FormError message={errors?.result?.message} />
        </form>
      </FormBox>
      <BottomBox type="signUp" />
    </AuthLayout>
  );
};

export default SignUp;
