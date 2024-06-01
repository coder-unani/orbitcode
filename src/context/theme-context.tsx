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
  componentIndex: number;
  handleNavClick: (index: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 컴포넌트 번호
  const [componentIndex, setComponentIndex] = useState<number>(0);

  // nav 카테고리 클릭시 컴포넌트 변경
  const handleNavClick = (index: number) => {
    setComponentIndex(index);
  };

  return <ThemeContext.Provider value={{ themes, componentIndex, handleNavClick }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
