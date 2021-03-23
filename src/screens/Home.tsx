import React from 'react';
import { isLoggedInVar } from '../apollo';

const Home = () => {
  const logUserOut = () => isLoggedInVar(false);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logUserOut}>Log Out Now!</button>
    </div>
  );
};

export default Home;
