import React from 'react';
import { ReactComponent as Logo } from 'assets/Logo.svg';

const Header = () => {
  return (
    <header className="header-content">
      <div className="logo">
        <a href="/">
          <Logo fill="white" width={26} height={26} />
          <p>ORBITCODE</p>
        </a>
      </div>
      <button className="hire">우리와 같이 떠나요!</button>
      <button className="menu">
        <i className="ri-menu-line"></i>
        {/* <i className="ri-shining-2-fill"></i> */}
      </button>
    </header>
  );
};

export default Header;
