import React from 'react';
import './Home.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as View } from '../assets/view.svg';
import { ReactComponent as Line } from '../assets/line.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { ReactComponent as Menu } from '../assets/menu.svg';
import { ReactComponent as Comet2 } from '../assets/comet-2.svg';
import { ReactComponent as Star } from '../assets/star.svg';

const Home = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <Logo width={40} height={40} fill={'black'} />
          <p>OrbitCode</p>
        </div>
        <nav id='menu'>
          <ul className='menu__list'>
            <li className='menu__item'>Home</li>
            <li className='menu__item'>Services</li>
            <li className='menu__item'>Projects</li>
            <li className='menu__item'>Contact</li>
          </ul>
          <Menu className='menu__icon' width={32} height={32} />
        </nav>
      </header>
      <main>
        <section id='home'>
          <figure className='background__img'>
            <Comet2 id='comet1'/>
            <Star id='star1'/>
          </figure>
          <div className="section__container">
            <div className='main__title'>
              <img id='planet1' src='/assets/planet-1.png' alt="background" />
              <h1 className='title__first'>Orbit</h1>
              <h1 className='title__second'>Code<span>.</span></h1>
            </div>
            <p className='main__desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non. Nulla ultrices nibh sit amet enim semper, ac pulvinar velit viverra. Nulla tortor dui, facilisis quis feugiat sit amet, tempus nec arcu.
            </p>
          </div>
        </section>
        <section id='service'>
          <figure className='background__img'>
            <Star id='star2'/>
            <img id='planet2' src='/assets/planet-2.png' alt="background" />
            <img id='bgService' src='/assets/services.png' alt="background" />
          </figure>
          <div className="section__container">
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Services</p>
              <span>&#47;&gt;</span>
            </div>
            <div className='service__content'>
              <div className='content'>
                <p className='content__title'>Lorem Ipsum</p>
                <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non.</p>
              </div>
              <div className='content'>
                <p className='content__title'>Lorem Ipsum</p>
                <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non.</p>
              </div>
              <div className='content'>
                <p className='content__title'>Lorem Ipsum</p>
                <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non.</p>
              </div>
              <div className='content'>
                <p className='content__title'>Lorem Ipsum</p>
                <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='projects'>
          <div className="section__container">
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Projects</p>
              <span>&#47;&gt;</span>
            </div>
            <div className='project__content'>
              <ul>
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
                    <div className="right">
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
                    <div className="right">
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
                    <div className="right">
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
                    <div className="right">
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
                    <div className="right">
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
                    <div className="right">
                      <View width={24} height={24} />
                      <Line width={16} />
                    </div>
                  </div>
                  <div className='content__desc'></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id='contact'>
          <figure className='background__img'>
            <div id='circle' />
            <img id='astronaut' src='/assets/astronaut.png' alt="background" />
            <img id='bgContact' src='/assets/contact.png' alt="background" />
          </figure>
          <div className="section__container">
            <div className='sub__title'>
              <span>&lt;</span>
              <p>Contact</p>
              <span>&#47;&gt;</span>
            </div>
            <div className="contact__content">
              <a href='mailto:admin@orbitcode.kr'>메일 보내기</a>
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