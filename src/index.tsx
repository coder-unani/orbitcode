import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'context/theme-context';
import Main from 'pages/Main';
import '@fontsource-variable/montserrat';
import 'remixicon/fonts/remixicon.css';
import 'styles/Main.css';
import 'locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </Router>,
);
