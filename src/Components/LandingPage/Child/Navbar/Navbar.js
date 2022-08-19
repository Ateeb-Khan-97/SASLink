import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../../../Assets/images/logoWhite.png';

const Navbar = () => {
  // Hooks
  const [navbarClass, setNavBarClass] = useState('navbar-main');
  const [showLogo, setShowLogo] = useState(true);
  //
  // Functions
  const navbarFunction = () => {
    if (window.scrollY >= 2) {
      setNavBarClass('navbar-main active');
    } else {
      setNavBarClass('navbar-main');
    }
  };
  //
  // UseEffect
  useEffect(() => {
    window.addEventListener('scroll', navbarFunction);
  });
  //
  return (
    <>
      <div className={navbarClass}>
        <div className='navbar-container'>
          <div className='navbar-logo-wrapper'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='navbar-link-div'>
            <a href='#features'>Features</a>
            <div className='navbar-link-divider'></div>
            <a href='#about'>About Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
