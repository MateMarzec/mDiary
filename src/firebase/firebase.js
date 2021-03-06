import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

// Firebase Set-up
const config = {
    apiKey: "AIzaSyDoKsbhysW4G965wNUuXqOzM2_B_VGoXwA",
    authDomain: "mdiary-project.firebaseapp.com",
    databaseURL: "https://mdiary-project-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "mdiary-project",
    storageBucket: "mdiary-project.appspot.com",
    messagingSenderId: "268390518866",
    appId: "1:268390518866:web:fe66374898a760da2f4f8b",
    measurementId: "G-CVRSKZ0S98"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, FacebookAuthProvider, database as default };