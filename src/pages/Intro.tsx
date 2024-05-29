import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-banner">
        <h1>당신의 비즈니스를 우주로!</h1>
        <p>
          Orbitcode와 함께 디지털 세상을 정복하세요. 최고의 디자인과 혁신적인 기술로 당신의 디지털 존재감을
          극대화합니다.
        </p>
        <button className="join">
          우리와 같이 떠나요! 👋
          <i className="ri-arrow-right-line"></i>
          <div className="background"></div>
        </button>
        <img src="assets/intro.png" alt="우주비행사" />
      </div>
      <div className="intro-options">
        <a href="#">
          <h3>혁신적인 디자인</h3>
          <p>
            독창적이고 시선을 사로잡는 디자인으로 브랜드의 개성을 돋보이게 하며, 최신 디자인 트렌드를 반영하여 사용자
            경험을 극대화합니다.
          </p>
        </a>
        <a href="#">
          <h3>맞춤형 솔루션</h3>
          <p>
            각 고객의 요구에 맞춘 맞춤형 웹 솔루션을 제공하며, 유연하고 확장 가능한 웹사이트를 구축하여 비즈니스 성장에
            기여합니다.
          </p>
        </a>
        <a href="#">
          <h3>지속적인 지원</h3>
          <p>
            프로젝트 완료 후에도 지속적인 유지 보수와 지원을 통해 웹사이트의 안정성을 보장하며, 정기적인 업데이트와
            최적화를 통해 항상 최신 상태를 유지합니다.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Intro;
