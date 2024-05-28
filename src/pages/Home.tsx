import React from 'react';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import 'styles/Home.css';

export {};

/**
 * @TODOS
 * 컴포넌트 분리
 * 1. header
 * 2. nav
 * 3. main
 * 4. footer
 */

const Home = () => {
  return (
    <div className="wrap">
      <header className="header-content">
        <div className="logo">
          <a href="/">
            <Logo fill="white" width={26} height={26} />
            <p>ORBITCODE</p>
          </a>
        </div>
        <button className="join">우리와 같이 떠나요!</button>
        <button className="menu">
          {/* <i className="ri-menu-line"></i> */}
          <i className="ri-shining-2-fill"></i>
        </button>
      </header>
      <nav className="nav-content">
        {/* 카테고리 json */}
        <ul>
          <li className="active">Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
          <li>Hire us</li>
        </ul>
      </nav>
      <main className="main-content">
        <ul>
          <li>
            <div className="intro">
              <div className="intro-banner">
                <h1>당신의 비즈니스를 우주로!</h1>
                <p>
                  Orbitcode와 함께 디지털 세상을 정복하세요. 최고의 디자인과 혁신적인 기술로 당신의 디지털 존재감을
                  극대화합니다.
                </p>
                <button className="join">
                  우리와 같이 떠나요!
                  <i className="ri-arrow-right-line"></i>
                  <div className="background"></div>
                </button>
                <img src="assets/intro.png" alt="우주비행사" />
              </div>
            </div>
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
