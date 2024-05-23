import React from "react";
import "js/functions.js";
import "styles/main.css";
import { ReactComponent as LogoIcon } from "assets/Logo.svg";
import { ReactComponent as RightArrowIcon } from "assets/RightArrow.svg";
import { ReactComponent as PrevArrowIcon } from "assets/PrevArrow.svg";
import { ReactComponent as NextArrowIcon } from "assets/NextArrow.svg";
import { ReactComponent as CheckIcon } from "assets/Check.svg";

/**
 * @TODO
 * 1. hammer.js (swipe 기능) -> react-hammerjs or react-use-gesture 로 대체
 * 2. jquery -> react, javascript 로 대체
 * 3. 로고 변경
 */

const Home = () => {
  return (
    <>
      {/* notification for small viewports and landscape oriented smartphones */}
      <div className="device-notification">
        <a className="device-notification--logo" href="#0">
          {/* <img src="assets/img/logo-2.png" alt="Orbitcode" /> */}
          <LogoIcon width={26} height={26} fill="white"/>
          <p>Orbitcode</p>
        </a>
        <p className="device-notification--message">
          Orbitcode has so much to offer that we must request you orient your
          device to portrait or find a larger screen. You won't be disappointed.
        </p>
      </div>

      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return"></div>
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <header className="header">
                <a className="header--logo" href="#0">
                  {/* <img src="assets/img/logo-2.png" alt="Orbitcode" /> */}
                  <LogoIcon width={26} height={26} fill="white"/>
                  <p>Orbitcode</p>
                </a>
                <button className="header--cta cta">Hire Us</button>
                <div className="header--nav-toggle">
                  <span></span>
                </div>
              </header>
              <nav className="l-side-nav">
                <ul className="side-nav">
                  <li className="is-active">
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Works</span>
                  </li>
                  <li>
                    <span>About</span>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                  <li>
                    <span>Hire us</span>
                  </li>
                </ul>
              </nav>
              <ul className="l-main-content main-content">
                <li className="l-section section section--is-active">
                  <div className="intro">
                    <div className="intro--banner">
                      <h1>
                        고객 만족을
                        <br />
                        최우선으로 하는
                        <br />
                        비즈니스 솔루션
                      </h1>
                      <button className="cta">
                        Hire Us
                        <RightArrowIcon />
                        <span className="btn-background"></span>
                      </button>
                      <img
                        src="assets/img/introduction-visual-3.png"
                        alt="Welcome"
                      />
                    </div>
                    <div className="intro--options">
                      <a href="#0">
                        <h3>컨설팅 서비스</h3>
                        <p>
                          전문 컨설턴트들이 고객의 비즈니스 성장을 돕기 위해
                          맞춤형 전략을 제시합니다. 시장 분석, 경쟁력 평가 및
                          비즈니스 계획 수립을 통해 최적의 결과를 도출합니다.
                        </p>
                      </a>
                      <a href="#0">
                        <h3>IT 솔루션</h3>
                        <p>
                          최신 기술을 활용한 IT 솔루션을 제공합니다. 시스템
                          통합, 소프트웨어 개발, 데이터 관리 등 다양한 서비스를
                          통해 효율성을 극대화합니다.
                        </p>
                      </a>
                      <a href="#0">
                        <h3>마케팅 서비스</h3>
                        <p>
                          창의적이고 효과적인 마케팅 전략을 통해 브랜드 가치를
                          높입니다. 디지털 마케팅, 소셜 미디어 관리, 광고 캠페인
                          등을 포함한 종합 마케팅 서비스를 제공합니다.
                        </p>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="l-section section">
                  <div className="work">
                    <h2>Works</h2>
                    <div className="work--lockup">
                      <ul className="slider">
                        <li className="slider--item slider--item-left">
                          <a href="#0">
                            <div className="slider--item-image">
                              <img src="assets/img/work-dart.png" alt="dart" />
                              {/* <img
                                src="assets/img/work-victory.jpg"
                                alt="Victory"
                              /> */}
                            </div>
                            <p className="slider--item-title">컨설팅 서비스</p>
                            <p className="slider--item-description">
                              전문 컨설턴트들이 고객의 비즈니스 성장을 돕기 위해
                              맞춤형 전략을 제시합니다. 시장 분석, 경쟁력 평가
                              및 비즈니스 계획 수립을 통해 최적의 결과를
                              도출합니다.
                            </p>
                          </a>
                        </li>
                        <li className="slider--item slider--item-center">
                          <a href="#0">
                            <div className="slider--item-image">
                              <img
                                src="assets/img/work-rocket.png"
                                alt="rocket"
                              />
                              {/* <img
                                src="assets/img/work-metiew-smith.jpg"
                                alt="Metiew and Smith"
                              /> */}
                            </div>
                            <p className="slider--item-title">IT 솔루션</p>
                            <p className="slider--item-description">
                              최신 기술을 활용한 IT 솔루션을 제공합니다. 시스템
                              통합, 소프트웨어 개발, 데이터 관리 등 다양한
                              서비스를 통해 효율성을 극대화합니다.
                            </p>
                          </a>
                        </li>
                        <li className="slider--item slider--item-right">
                          <a href="#0">
                            <div className="slider--item-image">
                              <img
                                src="assets/img/work-planet.png"
                                alt="planet"
                              />
                              {/* <img
                                src="assets/img/work-alex-nowak.jpg"
                                alt="Alex Nowak"
                              /> */}
                            </div>
                            <p className="slider--item-title">마케팅 서비스</p>
                            <p className="slider--item-description">
                              창의적이고 효과적인 마케팅 전략을 통해 브랜드
                              가치를 높입니다. 디지털 마케팅, 소셜 미디어 관리,
                              광고 캠페인 등을 포함한 종합 마케팅 서비스를
                              제공합니다.
                            </p>
                          </a>
                        </li>
                      </ul>
                      <div className="slider--prev">
                        <PrevArrowIcon />
                      </div>
                      <div className="slider--next">
                        <NextArrowIcon />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="l-section section">
                  <div className="about">
                    <div className="about--banner">
                      <h2>
                        우리는
                        <br />
                        열정적인
                        <br />
                        사람들을
                        <br />
                        믿습니다
                      </h2>
                      <a href="#0">
                        회사 소개
                        <span>
                          <RightArrowIcon />
                        </span>
                      </a>
                      <img src="assets/img/about-visual-2.png" alt="About Us" />
                    </div>
                    <div className="about--options">
                      <a href="#0">
                        <h3>Winners</h3>
                      </a>
                      <a href="#0">
                        <h3>Philosophy</h3>
                      </a>
                      <a href="#0">
                        <h3>History</h3>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="l-section section">
                  <div className="contact">
                    <div className="contact--lockup">
                      <div className="modal">
                        <div className="modal--information">
                          <p>서울특별시 중구 예시로 123</p>
                          <a href="mailto:ouremail@gmail.com">
                            contact@samplecompany.com
                          </a>
                          <a href="tel:+148126287560">+82 1234-5678</a>
                        </div>
                        <ul className="modal--options">
                          <li>
                            <a href="#0">facebook</a>
                          </li>
                          <li>
                            <a href="#0">twitter</a>
                          </li>
                          <li>
                            <a href="mailto:ouremail@gmail.com">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="l-section section">
                  <div className="hire">
                    <h2>You want us to do</h2>
                    {/* checkout formspree.io for easy form setup */}
                    <form className="work-request">
                      <div className="work-request--options">
                        <span className="options-a">
                          <input
                            id="opt-1"
                            type="checkbox"
                            value="app design"
                          />
                          <label htmlFor="opt-1">
                            <CheckIcon />
                            App Design
                          </label>
                          <input
                            id="opt-2"
                            type="checkbox"
                            value="graphic design"
                          />
                          <label htmlFor="opt-2">
                            <CheckIcon />
                            Graphic Design
                          </label>
                          <input
                            id="opt-3"
                            type="checkbox"
                            value="motion design"
                          />
                          <label htmlFor="opt-3">
                            <CheckIcon />
                            Motion Design
                          </label>
                        </span>
                        <span className="options-b">
                          <input id="opt-4" type="checkbox" value="ux design" />
                          <label htmlFor="opt-4">
                            <CheckIcon />
                            UX Design
                          </label>
                          <input id="opt-5" type="checkbox" value="webdesign" />
                          <label htmlFor="opt-5">
                            <CheckIcon />
                            Webdesign
                          </label>
                          <input id="opt-6" type="checkbox" value="marketing" />
                          <label htmlFor="opt-6">
                            <CheckIcon />
                            Marketing
                          </label>
                        </span>
                      </div>
                      <div className="work-request--information">
                        <div className="information-name">
                          <input id="name" type="text" spellCheck="false" />
                          <label htmlFor="name">Name</label>
                        </div>
                        <div className="information-email">
                          <input id="email" type="email" spellCheck="false" />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <input type="submit" value="Send Request" />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="outer-nav">
          <li className="is-active">Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
          <li>Hire us</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
