import React, { useState } from 'react';
import './LoginPage.css';
import Logo from '../../Assets/images/logoWhiteGreen.png';
import { BiArrowToLeft } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // States
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'admin' && password === 'admin') {
      navigate('/dashboard');
    }
  };
  //
  return (
    <>
      <div className='login-header'>
        <Link to='/'>
          <BiArrowToLeft />
        </Link>

        <div className='login-logo-wrapper'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
      <div className='login-main'>
        <div className='login-container'>
          <h1>Sign In</h1>
          <form action='' className='login-form' onSubmit={handleSubmit}>
            <div className='login-input-div'>
              <input
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                type='text'
                placeholder='Enter Your User Id'
                autoComplete='off'
                required
              />
            </div>
            <div className='login-input-div'>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type='password'
                placeholder='Enter Your Password'
                autoComplete='off'
                required
              />
            </div>
            <div className='login-remember-wrapper'>
              <div className='login-checkbox-div'>
                <input type='checkbox' />
                <label>Remember me</label>
              </div>
              <div className='login-forget-password-div'>
                <Link to={'/login/reset'}>forget password?</Link>
              </div>
            </div>
            <button type='submit'>Log In</button>
          </form>
          {/* <div className='login-facingProblem-div'>
            <h5>facing problem signing in?</h5>
            <h5>
              Contact Help
              <a href='#'>+92 309 2031204</a>
              <a href='#'>saslink@gmail.com</a>
            </h5>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
