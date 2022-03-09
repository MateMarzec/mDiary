import React from 'react';
import { Link } from 'react-router-dom';
import DashboardDescription from './DashboardDescription'


const DashboardPage = () => (
  <div>
    <DashboardDescription />
    <div className='box'>
      <Link className="button" to="/create">Add Blood Test Result</Link>
    </div>
    <div className='box'>
      <Link className="button" to="/testResults">View Previous Blood Tests</Link>
    </div>
  </div>
);

export default DashboardPage;
