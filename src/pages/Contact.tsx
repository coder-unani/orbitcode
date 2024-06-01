import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();
  const imageBasePath = 'assets/';

  type Sns = {
    type: string;
    name: string;
    url: string;
  };

  const sns: Sns[] = t(`contact.sns`, { returnObjects: true }) as Sns[];

  useEffect(() => {
    const contact = document.querySelector('.contact');
    const facebook = document.querySelector('.facebook');
    const twitter = document.querySelector('.twitter');

    contact?.setAttribute('style', `background-image: url(${imageBasePath}${t(`contact.map`)})`);
    facebook?.classList.add('disabled');
    twitter?.classList.add('disabled');
  }, [t]);

  return (
    <div className="contact">
      <div className="contact-lockup">
        <div className="modal">
          <div className="information">
            <p>{t(`contact.address`)}</p>
            <Link to={`mailto:${t(`contact.email`)}`}>{t(`contact.email`)}</Link>
          </div>
          <ul className="options">
            {sns.map((item, index) => (
              <li key={index}>
                <Link to={item.url} target="_blank" rel="noreferrer" className={item.type}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
