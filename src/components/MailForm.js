import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dnh5r5c', 'template_dq3zbye', form.current, 't1vOlXJmH2UDuxb9q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  let user = firebase.auth().currentUser;
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='label-input'>Name</label>
      <input className='text-input disabled-input' type="text" value={user.displayName} name="user_name" disabled />
      <label className='label-input'>Email</label>
      <input className='text-input disabled-input' type="email" value={user.email} name="user_email" disabled />
      <label className='label-input'>Message</label>
      <textarea className='text-input textarea-input' name="message" />
      <input className='button' type="submit" value="Send" />
    </form>
  );
};

export default MailForm;