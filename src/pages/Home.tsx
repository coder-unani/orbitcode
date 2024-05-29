import Header from 'components/Header';
import Nav from 'components/Nav';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'styles/Home.css';
import About from './About';
import Contact from './Contact';
import Hire from './Hire';

/**
 * @TODOS
 * - scroll down 시 컴포넌트 fade in, fade out 효과 추가
 * - 카카오톡 문의 기능 추가
 */

const Home = () => {
  // 컴포넌트 번호
  const [componentIndex, setComponentIndex] = useState<number>(0);

  // 컴포넌트 리스트
  const components = [<Intro />, <Work />, <About />, <Contact />, <Hire />];

  /*
  // 스크롤 중복 방지
  let isBreak = false;

  const movedown = (e: Event) => {
    const moveidx = componentIndex === components.length - 1 ? 0 : componentIndex + 1;
    setTimeout(() => {
      setComponentIndex(moveidx);
    }, 800);
  };

  const moveup = (e: Event) => {
    const moveidx = componentIndex === 0 ? components.length - 1 : componentIndex - 1;
    setTimeout(() => {
      setComponentIndex(moveidx);
    }, 800);
  };

  const toggleIsBreak = () => {
    isBreak = !isBreak;
  };

  const handleScroll = (e: WheelEvent) => {
    if (!isBreak) {
      if (e.deltaY > 0) {
        movedown(e);
      } else {
        moveup(e);
      }
      window.removeEventListener('wheel', handleScroll);
    }
  };

  // window.addEventListener('touchmove', (e) => {
  //   //
  // });

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {};
  }, [componentIndex]);
  */

  // 스크롤 중복 방지
  const [isThrottled, setIsThrottled] = useState<boolean>(false);

  const handleNavigation = useCallback(
    (e: WheelEvent) => {
      if (isThrottled) {
        return; // 0.8초 동안은 추가 변경을 막음
      }

      let { deltaY } = e;
      let index = componentIndex;

      // 스크롤 방향에 따라 컴포넌트 번호 변경
      if (deltaY < 0) {
        // 스크롤 업
        index = index === 0 ? components.length - 1 : index - 1;
      } else if (deltaY > 0) {
        // 스크롤 다운
        index = index === components.length - 1 ? 0 : index + 1;
      }

      setComponentIndex(index);
      // 변경 후 0.8초 동안 추가 변경을 막음
      setIsThrottled(true);

      setTimeout(() => {
        // 0.8초 후 추가 변경 가능
        setIsThrottled(false);
      }, 800);
    },
    [componentIndex, isThrottled],
  );

  const handleClick = useCallback((index: number): void => {
    setComponentIndex(index);
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleNavigation);
    return () => {
      window.removeEventListener('wheel', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="wrap">
      <Header componentIndex={componentIndex} />
      {/* <Nav componentIndex={componentIndex} toggleIsBreak={toggleIsBreak} /> */}
      <Nav componentIndex={componentIndex} handleClick={handleClick} />
      <main className="main-content">
        <ul>
          {components.map((component, index) => (
            <li key={index} className={index === componentIndex ? 'active' : ''}>
              {component}
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
