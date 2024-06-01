import React from 'react';
import 'styles/App.css';
import Home from 'pages/Home';
import { ThemeProvider } from 'context/theme-context';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
