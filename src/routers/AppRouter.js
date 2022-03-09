import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
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
        <PublicRoute path="/" element={<LoginPage/>} exact={true} />
        <PrivateRoute path="/dashboard" element={<DashboardPage/>} />
        <PrivateRoute path="/testResults" element={<ViewTestResults/>} />
        <PrivateRoute path="/testResult/:id" element={<ViewTestResult/>} />
        <PrivateRoute path="/create" element={<AddTestResults/>} />
        <PrivateRoute path="/edit/:id" element={<EditTestResults/>} />
        <PrivateRoute path="/preferences" element={<Preferences/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;