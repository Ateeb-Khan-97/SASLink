import { TextField } from '@mui/material';
import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <>
      <div id='registration' className='register-main'>
        <div className='register-container'>
          <h1>Join Us!</h1>
          <h5>
            Join the ranks of restaurants business nationwide who have partnered
            with SASLink and trusted us to empower their business and their
            brand.
          </h5>
          <form className='register-form' autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Full Name'
              variant='standard'
              autoComplete='off'
              required
            />
            <TextField
              id='standard-basic'
              label='Business Name'
              variant='standard'
              autoComplete='off'
              required
            />
            <TextField
              id='standard-basic'
              label='Email Address'
              variant='standard'
              type={'email'}
              autoComplete='off'
              required
            />
            <TextField
              id='standard-basic'
              label='Phone Number'
              variant='standard'
              type={'number'}
              autoComplete='off'
              required
            />
            <textarea placeholder='Message' autoComplete='off' required />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
