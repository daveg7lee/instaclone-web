import React from 'react';
import { isLoggedInVar } from '../apollo';

const Home = () => {
  const logUserOut = () => isLoggedInVar(false);
  return <div></div>;
};

export default Home;
