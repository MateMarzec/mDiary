import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import UserName from './UserName';

export const Preferences = ({ startLogout }) => (
  <main className="preferences_page">
    <div className='preferences_container'>
      <div className='preferences__description'>
        <h2>
          <UserName />
        </h2>
      </div>
      <div className='preferences__links'>
        <Link to="/">
          <div className="preferences__button account" >
            <div className="link" to="/account">
              <h4>Account</h4>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="preferences__button notification" >
            <div className="link">
              <h4>GDPR</h4>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="preferences__button help" >
            <div className="link" >
              <h4>Help</h4>
            </div>
          </div>
        </Link>
        <button className="preferences__button logout" onClick={startLogout}><h4>Logout</h4></button>
      </div>
    </div>
  </main>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Preferences);