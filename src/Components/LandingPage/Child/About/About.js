import React from 'react';
import './About.css';
import imageShayan from '../../../../Assets/images/shayan.JPG';
import imageAteeb from '../../../../Assets/images/ateeb.JPG';
import imageSaad from '../../../../Assets/images/saad.JPG';

const About = () => {
  return (
    <>
      <div id='about' className='about-main'>
        <div className='about-container'>
          <h1>Your Restaurant & Food Delivery Solutions</h1>
          <h5>
            SASlink is a powerful solution to all you restaurants problem, our
            POS dashboard, inventory management are designed to help you thrive,
            even in light of an increasingly competitive marketplace. In this
            modern world where every restaurant is facing rivalry, our SASlink
            Dashboard helps you compete with them.
          </h5>
          <div className='about-wrapper'>
            <div className='about-img-div'>
              <div className='about-img-wrapper'>
                <img src={imageShayan} alt='Shayan' />
              </div>
              <h5>Shayan Sheikh</h5>
            </div>
            <div className='about-img-div'>
              <div className='about-img-wrapper'>
                <img src={imageAteeb} alt='Ateeb' />
              </div>
              <h5>Ateeb Khan</h5>
            </div>
            <div className='about-img-div'>
              <div className='about-img-wrapper'>
                <img src={imageSaad} alt='Saad' />
              </div>
              <h5>Saad Azhar</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
