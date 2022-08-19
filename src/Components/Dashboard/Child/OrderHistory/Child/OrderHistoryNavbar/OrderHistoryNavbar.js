import React from 'react';
import './OrderHistoryNavbar.css';
// React-Router-Dom imports
import { Link } from 'react-router-dom';
// Icons
import { BsCalendar3 } from 'react-icons/bs';
//
const OrderHistoryNavbar = () => {
  return (
    <>
      <div className='order-history-navbar-container'>
        <div className='order-history-navbar-links-div'>
          <Link className='active' to={'#'}>
            All Orders
          </Link>
          <Link to={'#'}>Completed</Link>
          <Link to={'#'}>Cancelled</Link>
        </div>
        <div className='order-history-navbar-filter-div'>
          <input type={'date'} />
          <span>To</span>
          <input type={'date'} />
        </div>
      </div>
    </>
  );
};

export default OrderHistoryNavbar;
