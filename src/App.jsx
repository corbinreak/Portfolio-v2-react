import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutExtended from './Components/About-Extended';

import './App.css';




  function MainContent({ darkMode, setDarkMode }) {
    const location = useLocation();

    const showMain = location.pathname === '/';

    return (

      <>
        {showMain && (
          <>
            <About darkMode={darkMode} setDarkMode={setDarkMode} />
            <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
          </>
        )}
        <div className="content">
          <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/about-extended" element={<AboutExtended />} />
          </Routes>
        </div>
      </>
    );
  }
 function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

 return (
  <BrowserRouter>
  <div className="App">
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
    <div className="footer">
      <div className="footer-line">
        <p style={{ marginTop: '15px' }}>&copy; 2025 Corbin Reak</p>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  </div>
</BrowserRouter>
);


}

export default App
