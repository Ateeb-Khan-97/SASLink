import React from 'react';
import './OrderDetails.css';
// React-Router-dom
import { Link } from 'react-router-dom';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
//
const OrderDetails = (props) => {
  return (
    <>
      <div className='order-details-main'>
        <div className='order-details-wrapper'>
          <div className='order-details-header'>
            <Link to={'/dashboard/'}>
              <HiArrowSmLeft />
            </Link>
            <h1>
              Order Number <span>#{props.orderDetails.order_id}</span>
            </h1>
            <div className='order-details-buttons-wrapper'>
              <button>
                Accept Order
                <span>
                  <BsFillCheckCircleFill />
                </span>
              </button>
              <button>
                Cancel Order
                <span>
                  <IoMdCloseCircle />
                </span>
              </button>
            </div>
          </div>
          <div className='order-details-left-div'>
            <div className='order-summary-div'>
              <table>
                <thead>
                  <tr>
                    <th>Items Summary</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chocolate Milkshake</td>
                    <td>x 2</td>
                    <td>PKR 150.00</td>
                    <td>PKR 300.00</td>
                  </tr>
                  <tr>
                    <td>Chocolate Smoothie</td>
                    <td>x 5</td>
                    <td>PKR 200.00</td>
                    <td>PKR 1000.00</td>
                  </tr>
                  <tr>
                    <td>Chicken Burger</td>
                    <td>x 3</td>
                    <td>PKR 500.00</td>
                    <td>PKR 1500.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='order-details-customer-div'>
              <h1>Customer And Order Details</h1>
              <span>
                <h3>Customer Name</h3>
                <h3>John Wick</h3>
              </span>
              <span>
                <h3>Phone Number</h3>
                <h3>090078601</h3>
              </span>
              <span>
                <h3>Type</h3>
                <h3>Delivery</h3>
              </span>
              <span>
                <h3>Note</h3>
                <h3>N/A</h3>
              </span>
            </div>
          </div>
          <div className='order-details-right-div'>
            <div className='order-details-rider-div'>
              <h2>Rider Details</h2>
              <h5>Robart Suvent</h5>
              <button>Track Rider</button>
            </div>
            <div className='order-details-order-summary-div'>
              <h4>Order Summary</h4>
              <span>
                <h5>Order Created</h5>
                <h5>Sun, May 7, 2022</h5>
              </span>
              <span>
                <h5>Order Time</h5>
                <h5>05:24 AM</h5>
              </span>
              <span>
                <h5>Subtotal</h5>
                <h5>PKR 2800.00</h5>
              </span>
              <span>
                <h5>Delivery Fee</h5>
                <h5>PKR 0.00</h5>
              </span>
            </div>
            <div className='order-details-order-subtotal-div'>
              <span>
                <h5>Total</h5>
                <h5>PKR 2800.00</h5>
              </span>
            </div>
            <div className='order-details-address-div'>
              <h4>Delivery Address</h4>
              <h5>
                Address line: <span>14 Anglesery Road</span>
              </h5>
              <h5>
                Flat / Building Name: <span>James Court</span>
              </h5>
              <h5>
                Street Name: <span>Anglesery Road</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
