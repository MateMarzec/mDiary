import { firebase, googleAuthProvider } from '../firebase/firebase';
import { FacebookAuthProvider } from "firebase/auth";

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const googleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
export const facebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(FacebookAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};