import React from 'react';
import TestResultList from './TestResultList';
import TestResultListFilter from './TestResultListFilter';

const ViewTestResults = () => (
  <div>
    <TestResultListFilter />
    <TestResultList />
  </div>
);

export default ViewTestResults;