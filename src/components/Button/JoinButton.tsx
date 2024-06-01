import React, { ReactNode, useEffect, useRef } from 'react';
import { useTheme } from 'context/theme-context';

const JoinButton = ({ children }: { children: ReactNode }) => {
  const { themes, componentIndex, handleNavClick } = useTheme();
  const joinButtonRef = useRef<HTMLButtonElement>(null);

  // @TODO: 카테고리명 하드코딩 수정하기
  useEffect(() => {
    if (themes[componentIndex].category !== 'Hire us' && themes[componentIndex].category !== 'Home') {
      joinButtonRef.current?.classList.add('active');
    } else {
      joinButtonRef.current?.classList.remove('active');
    }
  }, [componentIndex, themes]);

  const handleButtonClick = () => {
    themes.find((theme, index) => theme.category === 'Hire us' && handleNavClick(index));
  };

  return (
    <button className="join" onClick={handleButtonClick} ref={joinButtonRef}>
      {children}
    </button>
  );
};

export default JoinButton;
