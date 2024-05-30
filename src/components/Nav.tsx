import React, { MouseEventHandler, useEffect } from 'react';

interface NavProps {
  componentIndex: number;
  handleClick: (index: number) => void;
  // toggleIsBreak: () => void;
}

// const Nav = ({ componentIndex, toggleIsBreak }: NavProps) => {
const Nav = ({ componentIndex, handleClick }: NavProps) => {
  // 카테고리 리스트
  const categories = ['Home', 'Works', 'About', 'Contact', 'Hire us'];

  // setTimeout(() => {
  //   toggleIsBreak();
  // }, 800);

  const handleNavClick = (index: number) => handleClick(index);

  return (
    <nav className="nav-content">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={index === componentIndex ? 'active' : ''} onClick={() => handleNavClick(index)}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
