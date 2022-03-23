import React from 'react';
import { useState } from "react";
import { getAuth } from 'firebase/auth'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Login Page Component
export const RegisterPage = () => {
  const auth = getAuth()
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      await updateProfile(user.user, {
        displayName: registerName
      })
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return(
    <div className="register_box-layout">
    <div className="box-layout__box">
      <h1 className="register_item box-layout__title">Welcome!</h1>
      <h3 className="register_item box-subtitle">Sign Up to Our App</h3>
      <input
            type="email"
            className='text-input'
            placeholder="Email"
            onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}
        />
        <input
            type="password"
            className='text-input'
            placeholder="Password"
            onChange={(event) => {
                setRegisterPassword(event.target.value);
            }}
        />
        <input
            type="text"
            className='text-input'
            placeholder="Name"
            onChange={(event) => {
                setRegisterName(event.target.value);
            }}
        />

        <button className='register_item register-form-font sign__up' onClick={register}> Create User</button>
    </div>
  </div>
  );
};

export default RegisterPage;