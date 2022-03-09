import React from 'react';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin } from '../actions/auth';

export const LoginPage = ({ googleLogin, facebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Hello!</h1>
      <h3 className="box-subtitle">Login to Your Account</h3>
      <button className="button" onClick={googleLogin}>Login with Google</button>
      <button className="button" onClick={facebookLogin}>Login with Facebook</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  facebookLogin: () => dispatch(facebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);