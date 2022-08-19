import React from 'react';
import './Footer.css';
import Logo from '../../../../Assets/images/logoWhiteGreen.png';
import { MdAlternateEmail, MdPhone, MdFacebook } from 'react-icons/md';
import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='footer-main'>
        <div className='footer-container'>
          <div className='footer-wrapper'>
            <div className='footer-sec1'>
              <div className='footer-logo-wrapper'>
                <img src={Logo} alt='Logo' />
              </div>
              <div className='footer-contact footer-email-div'>
                <MdAlternateEmail />
                <a href='#'>saslink@gmail.com</a>
              </div>
              <div className='footer-contact footer-phone-div'>
                <MdPhone />
                <a href='#'>+92 309 2031204</a>
              </div>
            </div>
            <div className='footer-sec2'>
              <a href='#'>
                <MdFacebook />
              </a>
              <a href='#'>
                <BsInstagram />
              </a>
              <a href='#'>
                <BsWhatsapp />
              </a>
              <a href='#'>
                <BsLinkedin />
              </a>
            </div>
            <div className='footer-sec3'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
