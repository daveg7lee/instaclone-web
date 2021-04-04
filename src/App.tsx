import { useReactiveVar } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isLoggedInVar } from './apollo';
import routes from './routes';
import Home from './screens/Home';
import LogIn from './screens/LogIn';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            {isLoggedIn ? <Home /> : <LogIn />}
          </Route>
          {!isLoggedIn && (
            <Route path={routes.signUp}>
              <SignUp />
            </Route>
          )}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
