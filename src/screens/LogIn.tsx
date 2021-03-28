import React from 'react';
import { isLoggedInVar } from '../apollo';

const LogIn = () => {
  const logUserIn = () => isLoggedInVar(true);
  return (
    <div className="bg-bgLight dark:bg-bgDark">
      <h1 className="text-light dark:text-dark">Log In</h1>
      <button onClick={logUserIn} className="text-light dark:text-dark">
        Log In Now!
      </button>
    </div>
  );
};

export default LogIn;
