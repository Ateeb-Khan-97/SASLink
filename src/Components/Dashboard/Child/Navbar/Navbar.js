import React from 'react';
import './Navbar.css';
// Icons
import { RiUserFill } from 'react-icons/ri';
import { IoSearchSharp } from 'react-icons/io5';
//
const Navbar = () => {
  return (
    <>
      <div className='dashboard-navbar-main'>
        <div className='dashboard-navbar-container'>
          <div className='dashboard-navbar-search-div'>
            <input type='text' placeholder='Search' />
            <IoSearchSharp />
          </div>
          <div className='dashboard-navbar-logo-wrapper'>
            <img src='' alt='' />
          </div>
          <div className='dashboard-navbar-user-div'>
            <div className='dashboard-navbar-user-icon'>
              <RiUserFill />
            </div>
            <h5>Fresh Subz</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
