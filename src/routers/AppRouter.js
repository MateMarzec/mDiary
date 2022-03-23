import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Account from "../components/Account";
import AddBloodTestResults from "../components/AddBloodTestResults";
import AddLiverFunctionTestResults from "../components/AddLiverFunctionTestResults";
import ChooseType from "../components/ChooseType";
import Dashboard from "../components/Dashboard";
import EditTestResults from "../components/EditTestResults";
import Gdpr from "../components/Gdpr";
import Help from "../components/Help";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";
import PageNotFound from "../components/PageNotFound";
import Preferences from "../components/Preferences";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RegisterPage from "../components/RegisterPage";
import ViewTestResults from "../components/ViewTestResults";

export const history = createHistory();

//App Main Router
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={ChooseType} exact />
        <PrivateRoute path="/create/blood" component={AddBloodTestResults} />
        <PrivateRoute
          path="/create/liver"
          component={AddLiverFunctionTestResults}
        />
        <PrivateRoute path="/edit/:id" component={EditTestResults} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <PrivateRoute path="/gdpr" component={Gdpr} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/help" component={Help} />
        <PrivateRoute path="/view/:id" component={ViewTestResults} />
        <PublicRoute path="/" component={LoginPage} exact />
        <PublicRoute path="/register" component={RegisterPage} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
