import Header from 'components/Header';
import Nav from 'components/Nav';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'styles/Home.css';
import About from './About';
import Contact from './Contact';
import Hire from './Hire';
import Footer from 'components/Footer';

/**
 * @TODOS
 * - 카카오톡 문의 기능 추가
 * - work component에 gallery 추가
 * - join 버튼 클릭 시 hire component로 이동
 * - about component에 team 정보 추가
 * - contact component에 버튼 수정
 * - hire component에 form 기능 추가
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
  const touchStart = useRef<number>(0);

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
          index = index === 0 ? components.length - 1 : index - 1;
        } else if (deltaY > 0) {
          // 스크롤 다운
          index = index === components.length - 1 ? 0 : index + 1;
        }
      } else if (e instanceof TouchEvent) {
        e.preventDefault();
        // 스와이프 방향에 따라 컴포넌트 번호 변경
        const touchEnd = e.changedTouches[0].clientY;
        const touchDistance = touchEnd - touchStart.current;

        if (touchDistance > 0) {
          // 스와이프 다운
          index = index === 0 ? components.length - 1 : index - 1;
        } else if (touchDistance < 0) {
          // 스와이프 업
          index = index === components.length - 1 ? 0 : index + 1;
        }
      }

      // 컴포넌트 번호 변경
      setComponentIndex(index);
      // 변경 후 0.8초 동안 추가 변경을 막음
      setIsThrottled(true);

      setTimeout(() => {
        // 0.8초 후 추가 변경 가능
        setIsThrottled(false);
      }, 800);
    },
    [componentIndex, isThrottled, components.length],
  );

  // 네비게이션 클릭 이벤트
  const handleClick = useCallback((index: number): void => {
    setComponentIndex(index);
  }, []);

  // 터치 시작 지점 저장
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  }, []);

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
      <Footer />
    </div>
  );
};

export default Home;
