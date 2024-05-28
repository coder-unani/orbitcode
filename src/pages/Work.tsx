import React from 'react';

const Work = () => {
  return (
    <div className="work">
      <h2>Works</h2>
      <div className="work-lookup">
        <ul className="slider">
          <li className="slider-item left">
            <a href="#">
              <div className="image">
                <img src="assets/work-2.png" alt="다트" />
              </div>
              <p className="title">맞춤형 솔루션</p>
              <p className="description">
                각 고객의 요구에 맞춘 맞춤형 웹 솔루션을 제공하며, 유연하고 확장 가능한 웹사이트를 구축하여 비즈니스
                성장에 기여합니다.
              </p>
            </a>
          </li>
          <li className="slider-item center">
            <a href="#">
              <div className="image">
                <img src="assets/work-1.png" alt="로켓" />
              </div>
              <p className="title">혁신적인 디자인</p>
              <p className="description">
                독창적이고 시선을 사로잡는 디자인으로 브랜드의 개성을 돋보이게 하며, 최신 디자인 트렌드를 반영하여
                사용자 경험을 극대화합니다.
              </p>
            </a>
          </li>
          <li className="slider-item right">
            <a href="#">
              <div className="image">
                <img src="assets/work-3.png" alt="행성" />
              </div>
              <p className="title">지속적인 지원</p>
              <p className="description">
                프로젝트 완료 후에도 지속적인 유지 보수와 지원을 통해 웹사이트의 안정성을 보장하며, 정기적인 업데이트와
                최적화를 통해 항상 최신 상태를 유지합니다.
              </p>
            </a>
          </li>
        </ul>
        <div className="slider-prev">
          <i className="ri-arrow-left-line"></i>
        </div>
        <div className="slider-next">
          <i className="ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Work;
