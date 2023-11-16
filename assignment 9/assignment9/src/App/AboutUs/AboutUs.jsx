// /src/components/About/About.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <h2>About Us</h2>
      <Card color="#32a852" text="About details" />
    </div>
  );
};

export default AboutUs;
