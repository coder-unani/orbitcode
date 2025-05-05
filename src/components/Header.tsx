import React from 'react';
import JoinButton from './Button/JoinButton';
import MenuButton from './Button/MenuButton';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Logo fill="white" width={26} height={26} />
          <p>{t(`header.company`)}</p>
        </Link>
      </div>
      <JoinButton>
        {t(`header.button`)}
        <div className="background"></div>
      </JoinButton>
      <MenuButton />
    </header>
  );
};

export default Header;
