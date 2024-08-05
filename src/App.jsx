
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './Contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Routes/AboutUs'

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
}

const App = () => (
  <ThemeProvider>
    <AppContent />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs></AboutUs>} />
      <Route path="*" element={<h1>Error</h1>} />
      
    </Routes>
  </ThemeProvider>
);

export default App;
