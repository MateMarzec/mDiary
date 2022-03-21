import React from 'react';
import ContactForm from './ContactForm';

// Help Component
const Help = () => (
  <main className='help_page'>
    <div className='help_container'>
      <div className='help_description'>
          <h2>
            Contact Us
          </h2>
        </div>
      </div>
      <div className='help_form'>
        <ContactForm />
      </div>
  </main>
);

export default Help;