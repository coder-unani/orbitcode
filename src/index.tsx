import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'context/theme-context';
import TagManager from 'react-gtm-module';
import Main from 'pages/Main';
import '@fontsource-variable/montserrat';
import 'remixicon/fonts/remixicon.css';
import 'styles/Main.css';
import 'locales/i18n';

// GTM 초기화
const tagManagerArgs = {
  gtmId: 'GTM-MKS697RZ',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </Router>,
);
