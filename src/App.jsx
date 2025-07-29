import { useState } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  
  return (
    <>
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
      <div className="footer">
        <div className="footer-line">
          <p> &copy; 2025 Corbin Reak</p>
        </div>
      </div>
    </>
  )

}

export default App
