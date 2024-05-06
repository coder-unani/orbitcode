import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Menu } from '../assets/menu.svg';
import './Header.css';

const Header = ({ menuList, onMenuClick }) => {
  const brandName = 'OrbitCode';

  return (
    <header>
      <div className='logo'>
          <Logo width={40} height={40} fill={'black'} />
          <p>{brandName}</p>
        </div>
        <nav id='menu'>
          <ul className='menu__list'>
            {menuList.map((menu, index) => (
              <li key={index} className='menu__item' onClick={() => onMenuClick(menu)}>{menu}</li>
            ))}
          </ul>
          <Menu className='menu__icon' width={32} height={32} />
        </nav>
    </header>
  )
}

export default Header