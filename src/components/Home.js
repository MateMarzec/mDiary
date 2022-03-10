import React from 'react';
import { Link } from 'react-router-dom';
import UserName from './UserName'


const Home = () => (
  <div>
    <h4>Good Morning,</h4>
      <UserName />
    <h4>How can we help?</h4>
    <div className='box'>
      <Link className="button" to="/create">Add Blood Test Result</Link>
    </div>
    <div className='box'>
      <Link className="button" to="/testResults">View Previous Blood Tests</Link>
    </div>
  </div>
);

export default Home;
