import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import routes from '../routes';

const NotFound = () => {
  return (
    <div className="allCenter h-screen flex-col">
      <PageTitle title="Page Not Found" />
      <h1 className="text-3xl font-bold">Sorry, this page isn't available</h1>
      <div className="allCenter mt-2.5">
        <p className="mr-1">
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <Link to={routes.home}>Go back to instaclone</Link>
      </div>
    </div>
  );
};

export default NotFound;
