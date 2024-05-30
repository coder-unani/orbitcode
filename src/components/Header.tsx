import React from 'react';
import { ReactComponent as Logo } from 'assets/Logo.svg';

interface HeaderProps {
  componentIndex: number;
  handleClick: (index: number) => void;
}

const Header = ({ componentIndex, handleClick }: HeaderProps) => {
  const handleButtonClick = () => handleClick(4);

  return (
    <header className="header-content">
      <div className="logo">
        <a href="/">
          <Logo fill="white" width={26} height={26} />
          <p>Orbitcode</p>
        </a>
      </div>
      <button
        className={`join ${componentIndex !== 0 && componentIndex !== 4 ? 'active' : ''}`}
        onClick={() => handleButtonClick()}
      >
        우리와 같이 떠나요! 👋
        <div className="background"></div>
      </button>
      <button className="menu">
        <i className="ri-menu-line"></i>
      </button>
    </header>
  );
};

export default Header;
