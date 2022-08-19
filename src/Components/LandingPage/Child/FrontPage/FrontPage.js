import React from 'react';
import './FrontPage.css';
import LaptopImage from '../../../../Assets/images/frontPageBackground.png';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <>
      <div className='frontpage-main'>
        <div className='frontpage-container'>
          <div className='frontpage-content-div'>
            <h1>
              Manage your food <br />
              delivery channels on <br />
              <span>one dashboard</span>
            </h1>
            <p>
              No more juggling multiple dashboards. SAS Link's POS integrations
              allow you to manage orders from different delivery services from
              your existing POS.
            </p>
            <div className='frontpage-content-button-div'>
              <a href='#registration'> Registration </a>
              <Link to={'/login'}>Sign In</Link>
            </div>
          </div>
          <div className='frontpage-image-div'>
            <div className='frontpage-image-wrapper'>
              <img src={LaptopImage} alt='laptop' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
