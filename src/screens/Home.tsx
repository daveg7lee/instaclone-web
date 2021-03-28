import React from 'react';
import { isLoggedInVar } from '../apollo';

const Home = () => {
  const logUserOut = () => isLoggedInVar(false);
  return (
    <div className="bg-bgLight dark:bg-bgDark">
      <h1 className="text-light dark:text-dark">Home</h1>
      <button onClick={logUserOut} className="text-light dark:text-dark">
        Log Out Now!
      </button>
    </div>
  );
};

export default Home;
