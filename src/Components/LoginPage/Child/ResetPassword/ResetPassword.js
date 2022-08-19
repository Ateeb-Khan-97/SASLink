import { Link } from 'react-router-dom';
import React from 'react';
import { BiArrowToLeft } from 'react-icons/bi';
import Logo from '../../../../Assets/images/logoWhiteGreen.png';
import './ResetPassword.css';

const ResetPassword = () => {
  return (
    <>
      <div className='resetpassword-header'>
        <Link to='/login'>
          <BiArrowToLeft />
        </Link>

        <div className='resetpassword-logo-wrapper'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
      <div className='resetpassword-main'>
        <div className='resetpassword-container'>
          <h1>Find Your Account</h1>
          <hr />
          <h5>Please enter your User Id to search for your account.</h5>
          <form action='' className='resetpassword-form'>
            <div className='resetpassword-input-div'>
              <input type='text' placeholder='Enter Your User Id' />
            </div>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
