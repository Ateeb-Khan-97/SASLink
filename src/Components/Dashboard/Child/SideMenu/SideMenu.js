import React, { useState } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import SideMenuLinks from './Child/SideMenuLinks';

// Logo SASlink
import Logo from '../../../../Assets/images/logoGreen.png';
//
// Icons
import { BiLogOut } from 'react-icons/bi';
//

const SideMenu = () => {
  // State
  const [activeLink, setActiveLink] = useState({ activeObject: 1 });
  //
  // Functions
  const classToggler = (id) => {
    setActiveLink({ activeObject: id });
  };
  const toggleActiveStyles = (id) => {
    if (id === activeLink.activeObject) {
      return 'dashboard-option-div active';
    } else {
      return 'dashboard-option-div';
    }
  };
  return (
    <>
      <div className='dashboard-sideMenu-main'>
        <div className='dashboard-sideMenu-container'>
          <div className='dashboard-sideMenu-logo-wrapper'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='dashboard-options-wrapper'>
            {SideMenuLinks.map((elements, key) => {
              return (
                <Link
                  id={elements.id}
                  key={key}
                  to={elements.to}
                  className={toggleActiveStyles(elements.id)}
                  onClick={() => {
                    classToggler(elements.id);
                  }}
                >
                  <div className='dashboard-options-inner'>
                    {elements.icon}
                    <h5>{elements.text}</h5>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to={'/'} className='dashboard-logout-div'>
            <BiLogOut />
            <h5>Log Out</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
