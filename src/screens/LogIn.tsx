import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="allCenter h-screen flex-col">
      <div className="max-w-sm w-full">
        <div className="whiteBox allCenter flex-col pt-9 pb-6 px-10 mb-2.5">
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form className="mt-9 w-full allCenter flex-col">
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input
              type="submit"
              value="Log In"
              className="w-full blueButton mt-3 py-2 font-semibold"
            />
          </form>
          <div className=" mt-5 mb-7 w-full allCenter">
            <div className="seperator"></div>
            <span className="mx-2.5 text-instadarkGray font-semibold text-xs">
              OR
            </span>
            <div className="seperator"></div>
          </div>
          <div className="facebookLogin">
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
            <span className="ml-2.5 font-semibold">Log in with Facebook</span>
          </div>
        </div>
        <div className="whiteBox py-5 text-center">
          <span>Don't have an account?</span> <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
