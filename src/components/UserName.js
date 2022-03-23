import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// User Name Component
export const UserName = () => {
    let user = firebase.auth().currentUser;
    return(
        <>
            {user.displayName}
        </>
    );
}

export default UserName;