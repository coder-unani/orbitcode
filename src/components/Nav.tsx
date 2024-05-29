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

  return (
    <nav className="nav-content">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={index === componentIndex ? 'active' : ''} onClick={() => handleClick(index)}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
