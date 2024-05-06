import React from 'react';
import Modal from 'components/Modal/Modal';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import 'styles/Menu.scss';

const Menu = (props) => {
  const {menuList, onClose, onMenuClick } = props;

  const handleCloseMenu = () => {
    onClose();
  }

  return (
    <Modal>
      <div className='menu'>
        <div className='menu__header'>
          <h2>Menu</h2>
          <button onClick={handleCloseMenu}>
            <CloseIcon width={24} height={24}/>
          </button>
        </div>
        <div className='menu__container'>
          <ul>
            {menuList.map((menu, index) => (
              <li key={index} className='menu__item' onClick={() => {onClose(); onMenuClick(menu);}}><span>{menu}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default Menu;