import React from 'react';
import { Link } from 'react-router-dom';
import LoginBackground from './LoginBackground';

const NotFoundPage = () => (
  <main className='notFound__page'>
    <LoginBackground />
    <h1>404</h1>
    <h3>Page Not Found</h3>
    <Link to="/">
      <div className="notFound__button " >
        <div className="link" >
          <h2>Go Home</h2>
        </div>
      </div>
    </Link>
  </main>
);

export default NotFoundPage;