import React from 'react';
import TestResultList from './TestResultList';
import TestResultListFilter from './TestResultListFilter';
import TestsSummary from './TestsSummary';

const DashboardPage = () => (
  <div>
    <TestsSummary />
    <TestResultListFilter />
    <TestResultList />
  </div>
);

export default DashboardPage;
