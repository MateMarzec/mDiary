import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

class DashboardDescription extends React.Component {
    render () {
       let user = firebase.auth().currentUser;
          return (
              <p>{user.displayName}</p>
          );
    }
}

export default DashboardDescription;