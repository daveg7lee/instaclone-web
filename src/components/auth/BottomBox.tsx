import { Link } from 'react-router-dom';
import routes from '../../routes';

interface BottomBoxProps {
  type: 'logIn' | 'signUp';
}

const BottomBox = ({ type }: BottomBoxProps) => (
  <div className="baseBox py-5 text-center">
    <span className="mr-1.5">
      {type === 'logIn' ? "Don't have an account?" : 'Have an account?'}
    </span>
    <Link to={type === 'logIn' ? routes.signUp : routes.home}>
      {type === 'logIn' ? 'Sign Up' : 'Log In'}
    </Link>
  </div>
);

export default BottomBox;
