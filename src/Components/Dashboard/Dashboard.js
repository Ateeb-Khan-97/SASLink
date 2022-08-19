import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Dashboard.css';

// Child Imports
import SideMenu from './Child/SideMenu/SideMenu';
import Navbar from './Child/Navbar/Navbar';
import LiveOrders from './Child/LiveOrders/LiveOrders';
import OrderDetails from './Child/LiveOrders/Child/OrderDetails/OrderDetails';
import OrderHistory from './Child/OrderHistory/OrderHistory';
import Offers from './Child/Offers/Offers';
import Products from './Child/Products/Products';
import Stock from './Child/Stock/Stock';
import Settings from './Child/Settings/Settings';
//
const Dashboard = () => {
  // useState Hooks
  const [orderDetails, setOrderDetails] = useState({});
  //
  return (
    <>
      <Navbar />
      <SideMenu />
      <div className='dashboard-main'>
        <div className='dashboard-container'>
          <Routes>
            <Route
              path='/*'
              element={<LiveOrders setOrderDetails={setOrderDetails} />}
            />
            <Route path='/order_history' element={<OrderHistory />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/settings' element={<Settings />} />
            <Route
              path='/order_details'
              element={<OrderDetails orderDetails={orderDetails} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
