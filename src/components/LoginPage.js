import React from 'react';
import { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { googleLogin, facebookLogin } from '../actions/auth';
import { getAuth } from 'firebase/auth'
import { signInWithEmailAndPassword } from "firebase/auth";

// Login Page Component
export const LoginPage = ({ googleLogin, facebookLogin }) => {
  const auth = getAuth()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return(
    <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="login_item box-layout__title">Hello!</h1>
      <h3 className="login_item box-subtitle">Sign In to Your Account</h3>
      <input
        type="email"
        className='text-input'
        placeholder="Email"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type="password"
        className='text-input'
        placeholder="Password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button className="login_item login-form-font sign__in" onClick={login}> Sign In</button>
      <Link to="/register">
          <div className="login_item login-form-font sign__up" >
            <h4>Sign Up</h4>
          </div>
        </Link>
      <button className="login-form-font login__google" onClick={googleLogin}>Login via Google</button>
      <button className="login-form-font login__facebook" onClick={facebookLogin}>Login with Facebook</button>
    </div>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  facebookLogin: () => dispatch(facebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);