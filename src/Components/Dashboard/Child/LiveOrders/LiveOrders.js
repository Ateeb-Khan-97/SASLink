import React from 'react';
import './LiveOrders.css';
import { useNavigate } from 'react-router-dom';
// Icons
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlinePendingActions, MdDeliveryDining } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
//
//
import OrderDetails from './Child/OrderDetails/OrderDetails';
import Orders from './Child';
//
const LiveOrders = (props) => {
  // Hooks
  const navigate = useNavigate();
  //
  // Functions
  const handleClick = (curElem) => {
    navigate('/dashboard/order_details');
    props.setOrderDetails(curElem);
  };
  //
  return (
    <>
      <div className='orders-main'>
        <div className='orders-container'>
          <h2>Live Orders</h2>
          <div className='order-header-wrapper'>
            <div className='order-header number-orders'>
              <span className='icon'>
                <FiShoppingBag />
              </span>
              <span className='title'>
                <h1>10</h1>
                <h4>Orders</h4>
              </span>
            </div>
            <div className='order-header pending-order'>
              <span className='icon'>
                <MdOutlinePendingActions />
              </span>
              <span className='title'>
                <h1>2</h1>
                <h4>Total Pending</h4>
              </span>
            </div>
            <div className='order-header order-dispatch'>
              <span className='icon'>
                <MdDeliveryDining />
              </span>
              <span className='title'>
                <h1>8</h1>
                <h4>Total Dispatch</h4>
              </span>
            </div>
          </div>
          <h2>Orders</h2>
          <div className='order-wrapper'>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order From</th>
                  <th>Payment</th>
                  <th>Type</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Orders.map((curElem, key) => {
                  return (
                    <tr key={key} onClick={(e) => handleClick(curElem)}>
                      <td>#{curElem.order_id}</td>
                      <td>{curElem.orderFrom}</td>
                      <td>{curElem.paymentType}</td>
                      <td className='order-type'>{curElem.OrderType}</td>
                      <td>{curElem.total}</td>
                      <td>
                        <button>
                          <BiDotsVerticalRounded />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveOrders;
