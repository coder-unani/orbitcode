import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <h2>우주처럼 무한한 가능성으로 함께 디지털 세상을 탐험해요</h2>
        <button className="join">
          우리의 궤도 속으로! 💫
          <i className="ri-arrow-right-line"></i>
        </button>
        <img src="assets/about.png" alt="우주비행사,행성" />
      </div>
      <div className="about-options">
        <a href="#0">
          <img src="assets/about_groot_3.png" alt="groot" />
          <h3>Groot</h3>
        </a>
        <a href="#0">
          <img src="assets/about_rocket_3.png" alt="rocket" />
          <h3>Rocket</h3>
        </a>
        <a href="#0">
          <img src="assets/about_thor_3.png" alt="thor" />
          <h3>Thor</h3>
        </a>
      </div>
    </div>
  );
};

export default About;
