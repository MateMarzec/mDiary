import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

class DashboardDescription extends React.Component {
    render () {
       let user = firebase.auth().currentUser;
            return (
                <div className='description__dashboard'>
                    <h4>Good Morning,</h4>
                    <h3 className='name'>{user.displayName}</h3>
                    <h4>How can we help?</h4>
                </div>
          );
    }
}

export default DashboardDescription;