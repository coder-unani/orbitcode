import React from 'react';
import JoinButton from './Button/JoinButton';
import MenuButton from './Button/MenuButton';
import { ReactComponent as Logo } from 'assets/Logo.svg';

const Header = () => {
  return (
    <header className="header">
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
      <MenuButton />
    </header>
  );
};

export default Header;
