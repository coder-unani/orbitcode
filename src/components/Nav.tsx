import React from 'react';
import { useTheme } from 'context/theme-context';

const Nav = () => {
  const { themes, componentIndex, handleNavClick } = useTheme();

  const handleClick = (index: number) => handleNavClick(index);

  return (
    <nav className="nav-content">
      <ul>
        {themes.map((theme, index) => (
          <li key={index} className={index === componentIndex ? 'active' : ''} onClick={() => handleClick(index)}>
            <span>{theme.category}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
