import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import Intro from 'pages/Intro';
import Work from 'pages/Work';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Hire from 'pages/Hire';

type Theme = {
  category: string;
  component: JSX.Element;
};

type Themes = Theme[];

export const themes: Themes = [
  {
    category: 'Home',
    component: <Intro />,
  },
  {
    category: 'Works',
    component: <Work />,
  },
  {
    category: 'About',
    component: <About />,
  },
  {
    category: 'Contact',
    component: <Contact />,
  },
  {
    category: 'Hire us',
    component: <Hire />,
  },
];

type ThemeContextType = {
  themes: Themes;
  isMenuOpen: boolean;
  componentIndex: number;
  handleMenuClick: () => void;
  handleNavClick: (index: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 메뉴
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // 컴포넌트 번호
  const [componentIndex, setComponentIndex] = useState<number>(0);

  // 메뉴 클릭시 메뉴 열기/닫기
  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((prev) => {
      handleToggleMenu(!prev);
      return !prev;
    });
  }, []);

  // nav 카테고리 클릭시 컴포넌트 변경
  const handleNavClick = useCallback((index: number) => {
    setComponentIndex(index);
  }, []);

  return (
    <ThemeContext.Provider value={{ themes, isMenuOpen, componentIndex, handleMenuClick, handleNavClick }}>
      {children}
    </ThemeContext.Provider>
  );
}

const handleToggleMenu = (isMenuOpen: boolean) => {
  const perspective: Element | null = document.querySelector('.perspective');
  const outerNavReturn: Element | null = document.querySelector('.outer-nav-return');
  const outerNav: Element | null = document.querySelector('.outer-nav-content');
  const outerNavList: NodeListOf<Element> | null = document.querySelectorAll('.outer-nav-content li');
  const animationDuration: number = isMenuOpen ? 25 : 400;

  perspective?.classList.toggle('effect-rotate-left-animate');
  setTimeout(() => perspective?.classList.toggle('perspective-modalview'), animationDuration);
  outerNavReturn?.classList.toggle('active');
  outerNav?.classList.toggle('active');
  outerNavList.forEach((li) => li.classList.toggle('visible'));
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
