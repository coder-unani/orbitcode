import React, { useEffect } from 'react';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import About from './About';
import Contact from './Contact';
import Hire from './Hire';
import 'styles/Home.css';

/**
 * @TODOS
 * - scroll down 시 컴포넌트 fade in, fade out 효과 추가
 * - 카카오톡 문의 기능 추가
 */

const Home = () => {
  return (
    <div className="wrap">
      <Header />
      <Nav />
      <main className="main-content">
        <ul>
          <li className="active">
            <Intro />
          </li>
          <li className="active">
            <Work />
          </li>
          <li className="active">
            <About />
          </li>
          <li className="active">
            <Contact />
          </li>
          <li className="active">
            <Hire />
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
