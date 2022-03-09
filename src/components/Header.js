import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Home</h1>
        </Link>
        <Link className="header__title" to="/testResults">
          <h1>Dashboard</h1>
        </Link>
        <Link className="header__title" to="/preferences">
          <h1>Settings</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
