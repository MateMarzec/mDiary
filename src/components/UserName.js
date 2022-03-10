import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

class UserName extends React.Component {
    render () {
       let user = firebase.auth().currentUser;
            return (
                <>
                    {user.displayName}
                </>
          );
    }
}

export default UserName;