import React from 'react';
// Icons
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillBagFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';
import { FaBox, FaWarehouse } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
//

const SideMenuLinks = [
  {
    id: 1,
    to: '/dashboard/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <RiDashboardFill />,
    text: 'Live Orders',
  },
  {
    id: 2,
    to: '/dashboard/order_history/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <BsFillBagFill />,
    text: 'Order History',
  },
  {
    id: 3,
    to: '/dashboard/offers/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <MdLocalOffer />,
    text: 'Offers',
  },
  {
    id: 4,
    to: '/dashboard/products/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <FaBox />,
    text: 'Products',
  },
  {
    id: 5,
    to: '/dashboard/stock/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <FaWarehouse />,
    text: 'Stock',
  },
  {
    id: 6,
    to: '/dashboard/settings/',
    className: 'dashboard-option-div',
    activeClassName: 'dashboard-option-div active',
    icon: <AiFillSetting />,
    text: 'Settings',
  },
];

export default SideMenuLinks;
