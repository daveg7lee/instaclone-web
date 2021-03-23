import React from 'react';
import { isLoggedInVar } from '../apollo';

const LogIn = () => {
  const logUserIn = () => isLoggedInVar(true);
  return (
    <div>
      <h1>Log In</h1>
      <button onClick={logUserIn}>Log In Now!</button>
    </div>
  );
};

export default LogIn;
