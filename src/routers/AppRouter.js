import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import AddType from '../components/AddType';
import AddBloodTestResults from '../components/AddBloodTestResults';
import AddLiverFunctionTestResults from '../components/AddLiverFunctionTestResults';
import EditTestResults from '../components/EditTestResults';
import Preferences from '../components/Preferences';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Gdpr from '../components/Gdpr';
import Notification from '../components/Notification';
import Help from '../components/Help';
import ViewTestResults from '../components/ViewTestResults'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddType} exact={true}/>
        <PrivateRoute path="/create/blood" component={AddBloodTestResults} />
        <PrivateRoute path="/create/liver" component={AddLiverFunctionTestResults} />
        <PrivateRoute path="/edit/:id" component={EditTestResults} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <PrivateRoute path="/gdpr" component={Gdpr} />
        <PrivateRoute path="/notification" component={Notification} />
        <PrivateRoute path="/help" component={Help} />
        <PrivateRoute path="/view/:id" component={ViewTestResults} />
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;