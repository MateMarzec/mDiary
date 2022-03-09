import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ViewTestResults from '../components/ViewTestResults';
import ViewTestResult from '../components/ViewTestResult';
import AddTestResults from '../components/AddTestResults';
import EditTestResults from '../components/EditTestResults';
import Preferences from '../components/Preferences';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/testResults" component={ViewTestResults} />
        <PrivateRoute path="/testResult/:id" component={ViewTestResult} />
        <PrivateRoute path="/create" component={AddTestResults} />
        <PrivateRoute path="/edit/:id" component={EditTestResults} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;