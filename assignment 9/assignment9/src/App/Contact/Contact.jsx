// /src/components/Contact/Contact.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <h2>Contact</h2>
      <Card color="#ab32a8" text="Contact details" />
    </div>
  );
};

export default Contact;
