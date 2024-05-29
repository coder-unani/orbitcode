import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <h2>우주처럼 무한한 가능성으로 함께 디지털 세상을 탐험해요</h2>
        <button className="hire">
          우리의 궤도 속으로! 💫
          <i className="ri-arrow-right-line"></i>
        </button>
        <img src="assets/about.png" alt="우주비행사,행성" />
      </div>
      <div className="about-options">
        <a href="#">
          <h3>title</h3>
        </a>
        <a href="#">
          <h3>title</h3>
        </a>
        <a href="#">
          <h3>title</h3>
        </a>
      </div>
    </div>
  );
};

export default About;
