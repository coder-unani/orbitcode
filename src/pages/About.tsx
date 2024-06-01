import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  const imageBasePath = 'assets/';

  type Team = {
    name: string;
    image: string;
  };

  const teams: Team[] = t(`about.team`, { returnObjects: true }) as Team[];

  return (
    <div className="about">
      <div className="about-banner">
        <h2>{t(`about.banner.title`)}</h2>
        <button className="join">
          {t(`about.banner.button`)}
          <i className="ri-arrow-right-line"></i>
        </button>
        <img src={`${imageBasePath}${t(`about.banner.image`)}`} alt={t(`about.banner.image-alt`)} />
      </div>
      <div className="about-options">
        {teams.map((team, index) => (
          <Link to="" key={index}>
            <img src={`${imageBasePath}${team.image}`} alt={team.name} />
            <h3>{team.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
