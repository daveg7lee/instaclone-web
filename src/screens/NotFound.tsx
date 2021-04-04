import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="allCenter h-screen flex-col">
      <h1 className="text-3xl font-bold">Sorry, this page isn't available</h1>
      <div className="allCenter mt-2.5">
        <p className="mr-1">
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <Link to="/">Go back to instaclone</Link>
      </div>
    </div>
  );
};

export default NotFound;
