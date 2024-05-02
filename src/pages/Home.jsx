import React from 'react';
import './Home.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as View } from '../assets/view.svg';
import { ReactComponent as Line } from '../assets/line.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

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
        </nav>
      </header>
      <main>
        <section id='home'>
          <figure className='background__img'>
            <img src='/assets/bg-home.png' alt="background" />
          </figure>
          <div className='main__title'>
            <p className='title__first'>Orbit</p>
            <p className='title__second'>Code<span>.</span></p>
          </div>
          <p className='main__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non. Nulla ultrices nibh sit amet enim semper, ac pulvinar velit viverra. Nulla tortor dui, facilisis quis feugiat sit amet, tempus nec arcu.
          </p>
        </section>
        <section id='service'>
          <figure className='background__img'>
            <img src='/assets/bg-services.png' alt="background" />
          </figure>
          <div className='sub__title'>
            <span>&lt;</span>
            <p>Services</p>
            <span>&#47;&gt;</span>
          </div>
          <div className='service__content'>
            <div className='content'>
              <p className='content__title'>Lorem Ipsum</p>
              <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non. Nulla ultrices nibh sit amet enim semper, ac pulvinar velit viverra. Nulla tortor dui, facilisis quis feugiat sit amet, tempus nec arcu. Sed lacus urna, elementum id tincidunt maximus, tristique quis urna. Mauris iaculis semper euismod. Nullam lectus orci, facilisis eu congue vel, aliquam eget mauris. Proin lacinia tincidunt placerat. Morbi sodales mi lorem, nec porta ipsum scelerisque non. Fusce eu commodo erat. Quisque est enim, auctor vel tincidunt id, pellentesque ut lacus. Nunc posuere ultrices massa id pulvinar.</p>
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
              <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vehicula tellus. Mauris imperdiet aliquam orci, quis vulputate urna consectetur non. Nulla ultrices nibh sit amet enim semper, ac pulvinar velit viverra. Nulla tortor dui, facilisis quis feugiat sit amet, tempus nec arcu.</p>
            </div>
          </div>
        </section>
        <section id='projects'>
          <figure className='background__img'>
            <img src='/assets/bg-projects.png' alt="background" />
          </figure>
          <div className='sub__title'>
            <span>&lt;</span>
            <p>Projects</p>
            <span>&#47;&gt;</span>
          </div>
          <div className='project__content'>
            <div className='button'>
              <button>
                <Arrow width={38} height={48} />
              </button>
              <button>
                <Arrow width={38} height={48} style={{rotate: '-180deg'}} />
              </button>
            </div>
            <div className='content'>
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
            </div>
            <div className='content'>
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
            </div>
            <div className='content'>
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
            </div>
          </div>
        </section>
        <section id='contact'>
          <figure className='background__img'>
            <img src='/assets/bg-contact.png' alt="background" />
          </figure>
          <div className='sub__title'>
            <span>&lt;</span>
            <p>Contact</p>
            <span>&#47;&gt;</span>
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