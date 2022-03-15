import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import AddTestResults from '../components/AddTestResults';
import EditTestResults from '../components/EditTestResults';
import Preferences from '../components/Preferences';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Account from '../components/Account';
import Notification from '../components/Notification';
import Help from '../components/Help';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddTestResults} />
        <PrivateRoute path="/edit/:id" component={EditTestResults} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <PrivateRoute path="/account:id" component={Account} />
        <PrivateRoute path="/notification" component={Notification} />
        <PrivateRoute path="/help" component={Help} />
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;