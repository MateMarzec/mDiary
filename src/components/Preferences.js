import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { startLogout } from '../actions/auth';

class preferences extends React.Component {
  render () {
     let user = firebase.auth().currentUser;
          return (
              <div className='description__preferences'>
                  <h2 className='name'>{user.displayName}</h2>
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
        );
  }
}
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(preferences);