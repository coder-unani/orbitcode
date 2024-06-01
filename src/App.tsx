import React from 'react';
import { ThemeProvider } from 'context/theme-context';
import Main from 'pages/Main';
import 'styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
