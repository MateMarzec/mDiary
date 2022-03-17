import React from 'react';
import TestResultList from './TestResultList';
import TestResultListFilter from './TestResultListFilter';

// Dashboard Component
const Dashboard = () => (
  <main className='dashboard__page'>
    <h2 className='description'>View Test Results</h2>
    <TestResultListFilter />
    <TestResultList />
  </main>
);

export default Dashboard;