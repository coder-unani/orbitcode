import React, { useEffect } from 'react';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import 'styles/Home.css';

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
            <Work />
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
