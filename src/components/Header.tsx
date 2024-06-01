import React, { useEffect } from 'react';
import JoinButton from './Button/JoinButton';
import { ReactComponent as Logo } from 'assets/Logo.svg';

const Header = () => {
  return (
    <header className="header-content">
      <div className="logo">
        <a href="/">
          <Logo fill="white" width={26} height={26} />
          <p>Orbitcode</p>
        </a>
      </div>
      <JoinButton>
        우리와 같이 떠나요! 👋
        <div className="background"></div>
      </JoinButton>
      <button className="menu">
        <i className="ri-menu-line"></i>
      </button>
    </header>
  );
};

export default Header;
