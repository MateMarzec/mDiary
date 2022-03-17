import { firebase, googleAuthProvider } from "../firebase/firebase";
import { FacebookAuthProvider } from "firebase/auth";

// Set Login
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

// Google Login
export const googleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// Facebook Login
export const facebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(FacebookAuthProvider);
  };
};

// Set Logout
export const logout = () => ({
  type: "LOGOUT",
});

// Logout
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
