import { useState } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


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
             <Footer />
        </div>
      </div>
    </>
  )

}

export default App
