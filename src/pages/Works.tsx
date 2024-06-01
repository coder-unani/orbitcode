import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Works = () => {
  type Project = {
    id: string;
    name: string;
    url: string;
    image: string;
    category: string[];
  };

  const projects: Project[] = [
    {
      id: '1',
      name: '1300K',
      url: '//1300k.com/',
      image: 'assets/project-1.png',
      category: ['homepage', 'website'],
    },
    {
      id: '2',
      name: 'OTT DATA CRAWLING',
      url: '#',
      image: 'assets/project-2.png',
      category: ['programming', 'data'],
    },
    {
      id: '3',
      name: 'TODAYSTORY',
      url: '//picks.my/ko_v2/index.html',
      image: 'assets/project-3.png',
      category: ['homepage', 'website'],
    },
    {
      id: '4',
      name: 'ORBITCODE V1.0',
      url: '//www.orbitcode.co.kr/orbitcode/',
      image: 'assets/project-4.png',
      category: ['homepage', 'website'],
    },
    {
      id: '5',
      name: 'ORBITCODE V1.14',
      url: '//www.orbitcode.kr',
      image: 'assets/project-5.png',
      category: ['homepage', 'website'],
    },
    {
      id: '6',
      name: 'WEBSITE',
      url: '//design81669.imweb.me/',
      image: 'assets/project-6.png',
      category: ['homepage', ' website'],
    },
    {
      id: '7',
      name: 'NAMARI',
      url: '//www.orbitcode.co.kr/namari/',
      image: 'assets/project-7.png',
      category: ['homepage', 'website'],
    },
    {
      id: '8',
      name: 'AGENCY',
      url: '//www.orbitcode.co.kr/agency/',
      image: 'assets/project-8.png',
      category: ['homepage', 'website'],
    },
    {
      id: '9',
      name: 'OUTDOORS',
      url: '//www.orbitcode.co.kr/outdoors/',
      image: 'assets/project-9.png',
      category: ['homepage', 'website'],
    },
  ];

  useEffect(() => {
    const slide = document.querySelectorAll('.swiper-slide');

    slide.forEach((item) => {
      item.addEventListener('click', (e: Event) => {
        if (item.classList.contains('swiper-slide-prev') || item.classList.contains('swiper-slide-next')) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });

    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    prevButton?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    });

    nextButton?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }, []);

  return (
    <div className="works">
      <h2>Works</h2>
      <div className="works-lockup">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          spaceBetween={10}
          slidesPerView={2.2}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          centeredSlides
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          loopAddBlankSlides
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.8,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          observer
          observeParents
          observeSlideChildren
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link to={project.url} target="_blank" rel="noreferrer">
                <div className="image-wrap">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="text-wrap">
                  <h5>{project.name}</h5>
                  <p>{project.category.join(' / ')}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
