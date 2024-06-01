import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'context/theme-context';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import About from './About';
import Contact from './Contact';
import Hire from './Hire';
import Footer from 'components/Footer';
import Kakao from 'components/Kakao';
import OuterNav from 'components/OuterNav';
import 'styles/Home.css';
import myVideo from 'assets/background_space.mp4';

/**
 * @TODOS
 * - 카카오톡 문의 기능 추가
 * - about component에 team 정보 추가
 * - hire component에 form 기능 추가
 */

const Home = () => {
  // 컴포넌트 세팅
  const { themes, componentIndex, handleNavClick } = useTheme();

  // 스크롤 중복 방지
  const [isThrottled, setIsThrottled] = useState<boolean>(false);

  // 스와이프 시작 지점
  const touchStart = useRef<number>(0);

  // 터치 시작 지점 저장
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  }, []);

  // 네비게이션 이벤트 핸들러
  const handleNavigation = useCallback(
    (e: WheelEvent | TouchEvent) => {
      if (isThrottled) {
        return; // 0.8초 동안은 추가 변경을 막음
      }

      let index = componentIndex;

      if (e instanceof WheelEvent) {
        let { deltaY } = e;

        // 스크롤 방향에 따라 컴포넌트 번호 변경
        if (deltaY < 0) {
          // 스크롤 업
          index = index === 0 ? themes.length - 1 : index - 1;
        } else if (deltaY > 0) {
          // 스크롤 다운
          index = index === themes.length - 1 ? 0 : index + 1;
        }
      } else if (e instanceof TouchEvent) {
        e.preventDefault();
        // 스와이프 방향에 따라 컴포넌트 번호 변경
        const touchEnd = e.changedTouches[0].clientY;
        const touchDistance = touchEnd - touchStart.current;

        if (touchDistance > 50) {
          // 스와이프 다운
          index = index === 0 ? themes.length - 1 : index - 1;
        } else if (touchDistance < -50) {
          // 스와이프 업
          index = index === themes.length - 1 ? 0 : index + 1;
        }
      }

      // 컴포넌트 번호 변경
      handleNavClick(index);
      // 변경 후 0.8초 동안 추가 변경을 막음
      setIsThrottled(true);

      setTimeout(() => {
        // 0.8초 후 추가 변경 가능
        setIsThrottled(false);
      }, 800);
    },
    [componentIndex, isThrottled, themes.length],
  );

  // 스크롤 이벤트 추가
  useEffect(() => {
    window.addEventListener('wheel', handleNavigation);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleNavigation);
    return () => {
      window.removeEventListener('wheel', handleNavigation);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleNavigation);
    };
  }, [handleNavigation, handleTouchStart]);

  return (
    <>
      <div className="container">
        <div className="viewport">
          <div className="wrap">
            <video src={myVideo} typeof="video/mp4" autoPlay loop muted></video>
            <Header />
            <Nav />
            <main className="main-content">
              <ul>
                {themes.map((theme, index) => (
                  <li key={index} className={index === componentIndex ? 'active' : ''}>
                    {theme.component}
                  </li>
                ))}
              </ul>
            </main>
            <Kakao />
            <Footer />
          </div>
        </div>
      </div>
      <OuterNav />
    </>
  );
};

export default Home;
