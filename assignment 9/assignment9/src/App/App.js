import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Jobs from './Jobs/Jobs';
import Contact from './Contact/Contact';
import Login from './Login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
