import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';


function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Projects />
      <Contact />
    </div>
    <div className='about' style={{ marginTop: '60px' }}>
      <About darkMode={darkMode}  setDarkMode={setDarkMode} />
    </div>
      <div className="footer">
        <div className="footer-line">
          <p style={{ marginTop: '15px' }}> &copy; 2025 Corbin Reak</p>
             <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </>
  )

}

export default App
