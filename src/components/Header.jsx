import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Menu } from '../assets/menu.svg';

const Header = () => {
  const handleClick = (e) => {
    console.log(e.target);
  }

  return (
    <header>
      <div className='logo'>
          <Logo width={40} height={40} fill={'black'} />
          <p>OrbitCode</p>
        </div>
        <nav id='menu'>
          <ul className='menu__list'>
            <li className='menu__item' onClick={handleClick}>Home</li>
            <li className='menu__item' onClick={handleClick}>Services</li>
            <li className='menu__item' onClick={handleClick}>Projects</li>
            <li className='menu__item' onClick={handleClick}>Contact</li>
          </ul>
          <Menu className='menu__icon' width={32} height={32} />
        </nav>
    </header>
  )
}

export default Header