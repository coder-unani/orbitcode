import React, { useState } from 'react';
import Menu from 'components/Modal/Menu';
import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import 'styles/Header.scss';

const Header = (props) => {
  const { menuList, onMenuClick } = props;
  const brandName = 'OrbitCode';
  const [showMenu, setShowMenu] = useState(false); 

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <header>
      <div className='logo'>
          <Logo fill={'black'} />
          <p>{brandName}</p>
        </div>
        <nav id='menu'>
          <ul className='menu__list'>
            {menuList.map((menu, index) => (
              <li key={index} className='menu__item' onClick={() => onMenuClick(menu)}>{menu}</li>
            ))}
          </ul>
          <button>
            <MenuIcon className='menu__icon' onClick={handleClickMenu} />
            {showMenu && <Menu menuList={menuList} onClose={handleCloseMenu} onMenuClick={onMenuClick} />}
          </button>
        </nav>
    </header>
  )
}

export default Header;