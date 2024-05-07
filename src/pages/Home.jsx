import React, { useRef, useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as View } from 'assets/view.svg';
import { ReactComponent as Line } from 'assets/line.svg';
// import { ReactComponent as Arrow } from 'assets/arrow.svg';
import { ReactComponent as Comet2 } from 'assets/comet-2.svg';
import { ReactComponent as Star } from 'assets/star.svg';
import Header from 'components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'styles/Home.scss';

const Home = () => {
  // const [sections, setSections] = useState([
  const [sections] = useState([
    { title: 'Home', ref: useRef(null) },
    { title: 'Services', ref: useRef(null) },
    { title: 'Projects', ref: useRef(null) },
    { title: 'Contact', ref: useRef(null) }
  ]);

  const scrollToSections = (title) => {
    const section = sections.find(section => section.title === title);
    section?.ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header menuList={sections.map(s => s.title)} onMenuClick={scrollToSections} />
      <main>
        <section id='home' ref={sections[0].ref}>
          <figure className='background__img'>
            <Comet2 id='comet1'/>
            <Star id='star1'/>
          </figure>
          <div className='section__container'>
            <div className='main__title'>
              <img id='planet1' src='/assets/planet-1.png' alt='background' />
              <h1 className='title__first'>Orbit</h1>
              <h1 className='title__second'>Code<span>.</span></h1>
            </div>
            <p className='main__desc'>
              <strong>차원이 다른 웹 경험, 오르빗코드와 함께하세요.</strong>
              오르빗코드는 여러분의 비즈니스를 완벽하게 반영하는 맞춤형 웹사이트를 제공합니다. 고객의 니즈를 정밀하게 분석하여 창의적이고 혁신적인 디자인으로 구현해, 방문자들에게 잊지 못할 웹 경험을 선사합니다. 최신 기술과 최적화된 사용자 경험을 기반으로, 여러분의 비즈니스 성장을 가속화할 수 있는 강력한 온라인 플랫폼을 제공하겠습니다. 오르빗코드와 함께, 당신의 비즈니스가 온라인에서 빛나게 만드세요.
            </p>
          </div>
        </section>
        <section id='services' ref={sections[1].ref}>
          <figure className='background__img'>
            <Star id='star2'/>
            <img id='planet2' src='/assets/planet-2.png' alt='background' />
            <img id='bgService' src='/assets/services.png' alt='background' />
          </figure>
          <div className='section__container'>
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Services</p>
              <span>&#47;&gt;</span>
            </div>
            <div className='service__content'>
              <div className='content'>
                <p className='content__title'>합리적인 비용</p>
                <p className='content__desc'>
                  우리는 모든 서비스를 합리적인 비용으로 제공함으로써, 중소기업부터 대기업까지 다양한 규모의 기업들이 고품질의 웹 서비스를 이용할 수 있도록 합니다. 비용 효율적인 솔루션을 제공하면서도 품질에서는 절대 타협하지 않는 것이 Orbitcode의 목표입니다. 프로젝트의 요구와 예산에 맞춘 다양한 패키지를 제공하여 고객이 최적의 가치를 얻을 수 있도록 돕습니다.
                </p>
                <p className='content__title'>체계적인 홈페이지 개발</p>
                <p className='content__desc'>
                  프로젝트의 초기 단계에서부터 종료까지 체계적인 개발 프로세스를 따릅니다. 요구 사항 수집, 설계, 개발, 테스팅, 배포에 이르기까지 모든 단계는 명확한 로드맵에 따라 진행되며, 이를 통해 프로젝트의 투명성과 예측 가능성을 보장합니다. 이러한 접근 방식은 오류를 최소화하고, 프로젝트의 시간과 비용을 효과적으로 관리할 수 있게 합니다.
                </p>
              </div>
              <div className='content'>
                <p className='content__title'>반응형 웹 사이트 제작</p>
                <p className='content__desc'>
                  Orbitcode는 모든 디바이스에서 완벽하게 작동하는 반응형 웹 사이트를 제작합니다. 스마트폰, 태블릿, 데스크탑 등 다양한 화면 크기에 맞추어 최적화된 사용자 경험을 제공하므로 방문자는 어떤 기기를 사용하든 일관된 품질의 내용을 경험할 수 있습니다. 이는 사용자 만족도를 높이고, 구글 등 검색 엔진에서의 더 높은 랭킹을 확보할 수 있는 기반이 됩니다.
                </p>
              </div>
              <div className='content'>
                <p className='content__title'>맞춤형 디자인</p>
                <p className='content__desc'>
                  Orbitcode는 고객의 브랜딩과 목표에 맞춰 특화된 디자인을 제공합니다. 템플릿에 의존하지 않는 전적으로 맞춤화된 디자인은 각 클라이언트의 독특한 요구와 개성을 반영합니다. 이는 브랜드의 독창성을 강조하고, 방문자에게 강렬하고 기억에 남는 첫인상을 제공하는 데 중요한 역할을 합니다.
                </p>
              </div>
              <div className='content'>
                <p className='content__title'>서비스 환경 구축</p>
                <p className='content__desc'>
                  클라이언트가 필요로 하는 모든 서비스 환경을 구축합니다. 이는 웹 호스팅, 데이터베이스 관리, 백엔드 로직 구현 등을 포함하며, 안정적이고 확장 가능한 인프라 위에 구축됩니다. Orbitcode는 최신 클라우드 기술과 서버리스 아키텍처를 활용하여 고성능, 고가용성의 웹 솔루션을 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='projects' ref={sections[2].ref}>
          <div className='section__container'>
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Projects</p>
              <span>&#47;&gt;</span>
            </div>
            <div className='project__content'>
              {/* <ul>
                <li className='button'>
                  <button>
                    <Arrow width={38} height={48} />
                  </button>
                  <button>
                    <Arrow width={38} height={48} style={{rotate: '-180deg'}} />
                  </button>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>reviewniverse</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>project name</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>project name</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>project name</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>project name</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
                <li className='content'>
                  <div className='content__title'>
                    <div className='left'>
                      <Logo width={22} height={22} fill={'white'} />
                      <p>project name</p>
                    </div>
                    <div className='right'>
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
              </ul> */}
              <Swiper
                slidesPerView={'auto'}
                grid={{
                  rows: 2,
                  fill: 'row',
                }}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                  1024: {
                    slidesPerView: 3,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                }}
                className="mySwiper"
              >
                {new Array(10).fill(1).map((_, i) => (
                  <SwiperSlide key={i} className='content'>
                    <div className='content__title'>
                      <div className='left'>
                        <Logo width={22} height={22} fill={'white'} />
                        <p>project name</p>
                      </div>
                      <div className='right'>
                        <View width={24} height={24} />
                        <Line width={16} />
                      </div>
                    </div>
                    <div className='content__desc'></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section id='contact' ref={sections[3].ref}>
          <figure className='background__img'>
            <div id='circle'>
              <div id='rect' />
            </div>
            <img id='astronaut' src='/assets/astronaut.png' alt='background' />
            <img id='bgContact' src='/assets/contact.png' alt='background' />
          </figure>
          <div className='section__container'>
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Contact</p>
              <span>&#47;&gt;</span>
            </div>
            <div className='contact__content'>
              <div className='email'>
                <span>email</span>admin@orbitcode.kr
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='footer'>
          <p>Copyright ®2024 OrbitCode. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home;