import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
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

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/testResults" element={<ViewTestResults/>} />
          <Route path="/testResult/:id" element={<ViewTestResult/>} />
          <Route path="/create" element={<AddTestResults/>} />
          <Route path="/edit/:id" element={<EditTestResults/>} />
          <Route path="/preferences" element={<Preferences/>} />
        </Route>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route element={NotFoundPage} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;