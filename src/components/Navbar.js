import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../images/home.png';
import dashboard from '../images/dashboard.png';
import preferences from '../images/preferences.png';

export const Navbar = () => (
  <header className="navbar">
    <NavLink className="navbar__item" to="/home" activeClassName="is-active">
      <div className='navbar__hover'></div>
      <img src={home} alt="Home" className='home__icon'/>
      <h5>Home</h5>
    </NavLink>
    <NavLink className="navbar__item" to="/Dashboard" activeClassName="is-active">
      <div className='navbar__hover'></div>
      <img src={dashboard} alt="Dashboard" className='dashboard__icon'/>
      <h5>Dashboard</h5>
    </NavLink>
    <NavLink className="navbar__item" to="/preferences" activeClassName="is-active">
      <div className='navbar__hover'></div>
      <img src={preferences} alt="Settings" className='settings__icon'/>
      <h5>Settings</h5>
    </NavLink>
  </header>
);

export default Navbar;
