import React from 'react';
import FrontPage from './Child/FrontPage/FrontPage';
import Features from './Child/Features/Features';
import About from './Child/About/About';
import Register from './Child/Register/Register';
import Footer from './Child/Footer/Footer';
import Navbar from './Child/Navbar/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Features />
      <About />
      <Register />
      <Footer />
    </>
  );
};

export default LandingPage;
