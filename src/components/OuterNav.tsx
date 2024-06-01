import React from 'react';
import { useTheme } from 'context/theme-context';

const OuterNav = () => {
  // context에서 카테고리 목록 가져오기
  const { themes, componentIndex, handleNavClick } = useTheme();
  // 클릭 이벤트
  const handleClick = (index: number) => handleNavClick(index);

  return (
    <ul className="outer-nav">
      {themes.map((theme, index) => (
        <li key={index} className={index === componentIndex ? 'active' : ''} onClick={() => handleClick(index)}>
          <span>{theme.category}</span>
        </li>
      ))}
    </ul>
  );
};

export default OuterNav;
