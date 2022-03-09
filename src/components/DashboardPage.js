import React from 'react';
import { Link } from 'react-router-dom';
import TestResultList from './TestResultList';
import TestResultListFilter from './TestResultListFilter';


const DashboardPage = () => (
  <div>
    <Link className="button" to="/create">Add Test</Link>
    <TestResultListFilter />
    <TestResultList />
  </div>
);

export default DashboardPage;
