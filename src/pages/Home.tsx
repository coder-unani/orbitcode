import React from 'react';
import JoinButton from 'components/Button/JoinButton';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const imageBasePath = 'assets/';

  type Option = {
    title: string;
    description: string;
  };

  // 번역된 옵션을 배열로 간주하도록 타입 단언 사용
  const options: Option[] = t(`home.options`, { returnObjects: true }) as Option[];

  return (
    <div className="home">
      <div className="home-banner">
        <h1>{t(`home.banner.title`)}</h1>
        <p>{t(`home.banner.description`)}</p>
        <JoinButton>
          {t(`home.banner.button`)}
          <i className="ri-arrow-right-line"></i>
          <div className="background"></div>
        </JoinButton>
        <img src={`${imageBasePath}${t(`home.banner.image`)}`} alt={t(`home.banner.image-alt`)} />
      </div>
      <div className="home-options">
        {options.map((option, index) => (
          <Link to="" key={index}>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
