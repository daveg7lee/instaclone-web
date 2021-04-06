import React from 'react';
import { logUserOut } from '../apollo';

const Home = () => {
  return (
    <div>
      <h1>Welcome to homepage</h1>
      <button onClick={() => logUserOut()}>Log Out</button>
    </div>
  );
};

export default Home;
