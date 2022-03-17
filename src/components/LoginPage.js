import React from 'react';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin } from '../actions/auth';

// Login Page Component
export const LoginPage = ({ googleLogin, facebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="login_item box-layout__title">Hello!</h1>
      <h3 className="login_item box-subtitle">Login to Your Account</h3>
      <button className="login_item login-form-font login__google" onClick={googleLogin}>Login via Google</button>
      <button className="login_item login-form-font login__facebook" onClick={facebookLogin}>Login with Facebook</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  facebookLogin: () => dispatch(facebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);