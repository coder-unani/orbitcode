import React from "react";
import "js/functions.js";
import "styles/main.css";
import { ReactComponent as LogoIcon } from "assets/Logo.svg";
import { ReactComponent as RightArrowIcon } from "assets/RightArrow.svg";
import { ReactComponent as PrevArrowIcon } from "assets/PrevArrow.svg";
import { ReactComponent as NextArrowIcon } from "assets/NextArrow.svg";
import { ReactComponent as CheckIcon } from "assets/Check.svg";

import { contentMain, contentNav } from "config/variables";

/**
 * @TODO
 * 1. hammer.js (swipe 기능) -> react-hammerjs or react-use-gesture 로 대체
 * 2. jquery -> react, javascript 로 대체
 * 3. 로고 변경
 */

const Home = () => {
  const lang = "ko";
  const navMenus = [];

  contentNav.map((item, index) =>
    navMenus.push({
      class: index === 0 ? "is-active" : "",
      nameEn: item.name["en"],
      nameKo: item.name["ko"],
    })
  );

  return (
    <>
      {/* notification for small viewports and landscape oriented smartphones */}
      <div className="device-notification">
        <a className="device-notification--logo" href="#0">
          {/* <img src="assets/img/logo-2.png" alt="Orbitcode" /> */}
          <LogoIcon width={26} height={26} fill="white" />
          <p>{contentMain["header"]["title"][lang]}</p>
        </a>
        <p className="device-notification--message">
          {contentMain["header"]["description"][lang]}
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
                  <LogoIcon width={26} height={26} fill="white" />
                  <p data-ko={contentMain["header"]["title"]["ko"]}>
                    {contentMain["header"]["title"]["en"]}
                  </p>
                </a>
                <button
                  className="header--cta cta"
                  data-ko={contentMain["header"]["button"]["text"][lang]}
                >
                  {contentMain["header"]["button"]["text"][lang]}
                </button>
                <div className="header--nav-toggle">
                  <span></span>
                </div>
              </header>
              <nav className="l-side-nav">
                <ul className="side-nav">
                  {navMenus.map((item, index) => (
                    <li key={index} className={item.class}>
                      <span data-ko={item.nameKo}>{item.nameEn}</span>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="l-main-content main-content">
                <li className="l-section section section--is-active">
                  <div className="intro">
                    <div className="intro--banner">
                      <h1>{contentMain["banner"]["main"]["title"][lang]}</h1>
                      <p>
                        {contentMain["banner"]["main"]["description"][lang]}
                      </p>
                      <button
                        className="cta"
                        data-ko={
                          contentMain["banner"]["main"]["button"]["text"][lang]
                        }
                      >
                        {contentMain["banner"]["main"]["button"]["text"][lang]}
                        <RightArrowIcon />
                        <span className="btn-background"></span>
                      </button>
                      <img
                        src="assets/img/introduction-visual-3.png"
                        alt="Welcome"
                      />
                    </div>
                    <div className="intro--options">
                      {contentMain["sectionMain"].map((item, index) => (
                        <a key={index} href={item.link}>
                          <h3>{item.title[lang]}</h3>
                          <p>{item.description[lang]}</p>
                        </a>
                      ))}
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
                            </div>
                            <p className="slider--item-title">
                              {contentMain["sectionMain"][1]["title"][lang]}
                            </p>
                            <p className="slider--item-description">
                              {
                                contentMain["sectionMain"][1]["description"][
                                  lang
                                ]
                              }
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
                            </div>
                            <p className="slider--item-title">
                              {contentMain["sectionMain"][0]["title"][lang]}
                            </p>
                            <p className="slider--item-description">
                              {
                                contentMain["sectionMain"][0]["description"][
                                  lang
                                ]
                              }
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
                            </div>
                            <p className="slider--item-title">
                              {contentMain["sectionMain"][2]["title"][lang]}
                            </p>
                            <p className="slider--item-description">
                              {
                                contentMain["sectionMain"][2]["description"][
                                  lang
                                ]
                              }
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
                        {contentMain["sectionAbout"]["main"]["title"][lang]}
                      </h2>
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
                          <p>경기도 고양시 일산서구 일현로</p>
                          <a href="mailto:info@orbitcode.kr">
                            info@orbitcode.kr
                          </a>
                        </div>
                        <ul className="modal--options">
                          <li>
                            <a href="#0">facebook</a>
                          </li>
                          <li>
                            <a href="#0">twitter</a>
                          </li>
                          <li>
                            <a href="mailto:info@orbitcode.kr">Contact Us</a>
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
                          <input id="opt-1" type="checkbox" value="homepage" />
                          <label htmlFor="opt-1">
                            <CheckIcon />
                            Homepage
                          </label>
                          <input
                            id="opt-2"
                            type="checkbox"
                            value="shoppingmall"
                          />
                          <label htmlFor="opt-2">
                            <CheckIcon />
                            Shopping Mall
                          </label>
                          <input id="opt-3" type="checkbox" value="blog" />
                          <label htmlFor="opt-3">
                            <CheckIcon />
                            Blog
                          </label>
                        </span>
                        <span className="options-b">
                          <input id="opt-4" type="checkbox" value="Webdesign" />
                          <label htmlFor="opt-4">
                            <CheckIcon />
                            Web Design
                          </label>
                          <input id="opt-5" type="checkbox" value="ui/ux" />
                          <label htmlFor="opt-5">
                            <CheckIcon />
                            UI / UX
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
          {navMenus.map((item, index) => (
            <li key={index} className={item.class} data-ko={item.nameKo}>
              {item.nameEn}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
