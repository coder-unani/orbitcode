import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';

const Work = () => {
  interface Project {
    id: string;
    name: string;
    url: string;
    image: string;
    category: string[];
  }

  const projects: Project[] = [
    {
      id: '1',
      name: '1300K',
      url: '//1300k.com/',
      image: 'assets/project_1.png',
      category: ['homepage', 'website'],
    },
    {
      id: '2',
      name: 'OTT DATA CRAWLING',
      url: '#',
      image: 'assets/project_2.png',
      category: ['programming', 'data'],
    },
    {
      id: '3',
      name: 'TODAYSTORY',
      url: '//picks.my/ko_v2/index.html',
      image: 'assets/project_3.png',
      category: ['homepage', 'website'],
    },
    {
      id: '4',
      name: 'ORBITCODE V1.0',
      url: '//www.orbitcode.co.kr/orbitcode/',
      image: 'assets/project_4.png',
      category: ['homepage', 'website'],
    },
    {
      id: '5',
      name: 'ORBITCODE V1.14',
      url: '//www.orbitcode.kr',
      image: 'assets/project_5.png',
      category: ['homepage', 'website'],
    },
    {
      id: '6',
      name: 'WEBSITE',
      url: '//design81669.imweb.me/',
      image: 'assets/project_6.png',
      category: ['homepage', ' website'],
    },
    {
      id: '7',
      name: 'NAMARI',
      url: '//www.orbitcode.co.kr/namari/',
      image: 'assets/project_7.png',
      category: ['homepage', 'website'],
    },
    {
      id: '8',
      name: 'AGENCY',
      url: '//www.orbitcode.co.kr/agency/',
      image: 'assets/project_8.png',
      category: ['homepage', 'website'],
    },
    {
      id: '9',
      name: 'OUTDOORS',
      url: '//www.orbitcode.co.kr/outdoors/',
      image: 'assets/project_9.png',
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
  }, []);

  return (
    <div className="work">
      <h2>Works</h2>
      <div className="work-lockup">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          spaceBetween={10}
          slidesPerView={2.2}
          navigation
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
              <a href={project.url} target="_blank" rel="noreferrer">
                <div className="image-wrap">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="text-wrap">
                  <h5>{project.name}</h5>
                  <p>{project.category.join(' / ')}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
