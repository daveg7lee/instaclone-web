import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isLoggedInVar } from './apollo';
import Home from './screens/Home';
import LogIn from './screens/LogIn';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <LogIn />}
          </Route>
          {!isLoggedIn && (
            <Route path="/sign-up">
              <SignUp />
            </Route>
          )}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
