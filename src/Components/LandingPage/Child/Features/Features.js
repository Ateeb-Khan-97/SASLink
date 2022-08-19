import React from 'react';
import './Features.css';
import orderManagementImage from '../../../../Assets/images/Order-Management.png';
import webHostingImage from '../../../../Assets/images/Web-Hosting.png';
import powerfulAnalyticsImage from '../../../../Assets/images/Analytics.png';
import customerRetentionImage from '../../../../Assets/images/Customer-Retention.png';
import marketingPromotionImage from '../../../../Assets/images/Marketing.png';
import prioritySupportImage from '../../../../Assets/images/Support.png';

const Features = () => {
  return (
    <>
      <div id='features' className='features-main'>
        <div className='features-container'>
          <h1>
            All the features you need to accelerate your online business, and
            more
          </h1>
          <div className='features-wrapper'>
            <div className='features-feature order-management'>
              <div className='features-img-wrapper'>
                <img src={orderManagementImage} />
              </div>
              <h5>Order Management</h5>
            </div>
            <div className='features-feature web-hosting'>
              <div className='features-img-wrapper'>
                <img src={webHostingImage} />
              </div>
              <h5>Web Hosting</h5>
            </div>
            <div className='features-feature power-analytics'>
              <div className='features-img-wrapper'>
                <img src={powerfulAnalyticsImage} />
              </div>
              <h5>Power Analytics</h5>
            </div>
            <div className='features-feature customer-retention'>
              <div className='features-img-wrapper'>
                <img src={customerRetentionImage} />
              </div>
              <h5>Customer Retention</h5>
            </div>
            <div className='features-feature marketing-promotion'>
              <div className='features-img-wrapper'>
                <img src={marketingPromotionImage} />
              </div>
              <h5>Marketing Promotion</h5>
            </div>
            <div className='features-feature priority-support'>
              <div className='features-img-wrapper'>
                <img src={prioritySupportImage} />
              </div>
              <h5>Priority Support</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
