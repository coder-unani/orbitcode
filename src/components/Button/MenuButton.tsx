import React from 'react';
import { useTheme } from 'context/theme-context';

const MenuButton = () => {
  const { handleMenuClick } = useTheme();

  const handleButtonClick = () => {
    handleMenuClick();
  };

  return (
    <button className="menu" onClick={() => handleButtonClick()}>
      <i className="ri-menu-line"></i>
    </button>
  );
};

export default MenuButton;
