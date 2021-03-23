import React from 'react';

const LogIn = ({ setIsLoggedIn }: any) => {
  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Log In</button>
    </div>
  );
};

export default LogIn;
