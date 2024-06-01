import React from 'react';
import { useTheme } from 'context/theme-context';

const OuterNav = () => {
  const { themes, componentIndex, handleMenuClick, handleNavClick } = useTheme();

  const handleClick = (index: number) => {
    handleNavClick(index);
    handleMenuClick();
  };

  return (
    <ul className="outer-nav">
      {themes.map((theme, index) => (
        <li key={index} className={index === componentIndex ? 'active' : ''} onClick={() => handleClick(index)}>
          <span>{theme.category}</span>
        </li>
      ))}
    </ul>
  );
};

export default OuterNav;
