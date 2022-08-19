import React from 'react';
import './OrderHistory.css';
// ChildImports
import OrderHistoryNavbar from './Child/OrderHistoryNavbar/OrderHistoryNavbar';
//
const OrderHistory = () => {
  return (
    <>
      <div className='order-history-main'>
        <div className='order-history-wrapper'>
          <h1>Order History</h1>
          <OrderHistoryNavbar />
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
