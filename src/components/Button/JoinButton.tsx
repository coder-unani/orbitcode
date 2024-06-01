import React, { ReactNode, useEffect, useRef } from 'react';
import { useTheme } from 'context/theme-context';

const JoinButton = ({ children }: { children: ReactNode }) => {
  const { themes, componentIndex, handleNavClick } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 컴포넌트 변경 시 join 버튼 활성화 (Home, Hire us 제외)
  useEffect(() => {
    if (themes[componentIndex].category !== 'Hire us' && themes[componentIndex].category !== 'Home') {
      buttonRef.current?.classList.add('active');
    } else {
      buttonRef.current?.classList.remove('active');
    }
  }, [componentIndex]);

  const handleButtonClick = () => {
    themes.find((theme, index) => theme.category === 'Hire us' && handleNavClick(index));
  };

  return (
    <button className="join" onClick={handleButtonClick} ref={buttonRef}>
      {children}
    </button>
  );
};

export default JoinButton;
