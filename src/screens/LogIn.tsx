import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const LogIn = () => {
  return (
    <div className="allCenter h-screen">
      <div className="max-w-sm w-full">
        <div className="whiteBox allCenter pt-9 pb-6 px-10 mb-2.5">
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form className="mt-9 w-full allCenter">
            <input
              type="text"
              placeholder="Username"
              className="input mt-1.5"
            />
            <input
              type="password"
              placeholder="Password"
              className="input mt-1.5"
            />
            <input
              type="submit"
              value="Log In"
              className="w-full blueButton mt-3 py-2 font-semibold"
            />
          </form>
          <div className=" mt-5 mb-7 uppercase flex justify-center w-full items-center">
            <div className="seperator"></div>
            <span className="mx-2.5 text-instadarkGray font-semibold">OR</span>
            <div className="seperator"></div>
          </div>
          <div className="facebookLogin">
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
            <span className="ml-2.5 font-semibold">Log in with Facebook</span>
          </div>
        </div>
        <div className="whiteBox py-5 text-center">
          <span>Don't have an account?</span>{' '}
          <a href="#" className="font-semibold text-instaBlue">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
