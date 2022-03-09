import React from 'react';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin } from '../actions/auth';

export const LoginPage = ({ googleLogin, facebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">mDiary</h1>
      <p>It's time to get your level of self-care on another level!</p>
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