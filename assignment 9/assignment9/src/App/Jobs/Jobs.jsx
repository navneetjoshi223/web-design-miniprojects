// /src/components/Jobs/Jobs.js
import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <h2>Jobs</h2>
      <Card color="#2f4abf" text="Jobs details" />
    </div>
  );
};

export default Jobs;
