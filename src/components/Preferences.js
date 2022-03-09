import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Preferences = ({ startLogout }) => (
  <header className="header">
    <div className='description__preferences'>
      <Link className="button__preferences" to="/account">
        <h4>Account</h4>
      </Link>
      <Link className="button__preferences" to="/notification">
        <h4>Notification</h4>
      </Link>
      <Link className="button__preferences" to="/help">
        <h4>Help</h4>
      </Link>
      <button className="button--logout" onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Preferences);
