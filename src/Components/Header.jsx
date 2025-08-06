import React, { useState } from 'react';
import toggleIcon from '../assets/download.svg';
import { Link } from 'react-router-dom';
import '../App.css';


function Header({ darkMode, setDarkMode }) {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    // Styling for the header

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: mobileMenuOpen ? 'none' : '1px solid #808080',
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
        top: 0,
        left: 0,
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        boxSizing: 'border-box',
        height: '70px'
       
    };

    const homeStyle = {
        fontSize: '24px',
        margin: '0',
        fontWeight: 'normal' 
    };

        const toggleStyle = {
        height: '30px',
        width: '30px',
        cursor: 'pointer',
        marginRight: '55px',
        filter: darkMode ? 'invert(100%)' : 'none',
        
    };

    const rightGroupStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',};
    

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    // Mobile Styling //

    const hamburgerStyle = {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '5px',
      marginRight: '10px',  
      padding: '10px',      
    }

    const hamburgerBarStyle = {
      width: '25px',
      height: '3px',
      backgroundColor: darkMode ? 'white' : 'black',
      transition: '0.3s',

    }

    const mobileMenuStyle = {
      display: mobileMenuOpen ? 'flex' : 'none',
      position: 'absolute',
      top: '60px',
      right: '10px',
      width: '180px',
      backgroundColor: darkMode ? 'black' : 'white',
      border: '1px solid #808080',
      borderTop: mobileMenuOpen ? '1px solid #808080' : 'none',
      flexDirection: 'column',
      padding: '20px',
      gap: '15px',
      zIndex: 999,
      borderRadius: '0 0 8px 8px'
    }

    return (
      <div className='header' style={headerStyle}>
        <div className='home' style={{ marginLeft: '15px'}} > 
            <span> <Link to="/" style={linkStyle} >
              <h1 style={homeStyle}>Home</h1>
              </Link>
            </span>
      </div>

      {/* Desktop style */}
      <div className='right-group' style={rightGroupStyle}>
         <span> <Link to="/About-extended" style={linkStyle} >
          <h1 style={homeStyle}>About</h1>
         </Link>
         </span>
         <span className='toggle'>
           <img src={toggleIcon} alt="toggle-mode" onClick={() => setDarkMode(prev => !prev)} style={toggleStyle} />
        </span>
      </div>

       {/* Mobile hamburger menu */}
       <div
         className='hamburger'
         style={hamburgerStyle}
         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >

          <div style={hamburgerBarStyle}></div>
          <div style={hamburgerBarStyle}></div>
          <div style={hamburgerBarStyle}></div>

      </div>

      {/* Mobile menu */}
      <div style={mobileMenuStyle}>
        <Link
           to="/about-extended"
            style={linkStyle}
            onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Dark Mode</span>
          <img
            src={toggleIcon}
            alt="toggle-mode"
            onClick={() => setDarkMode(prev => !prev)}
            style={toggleStyle}
          />
        </div>
      </div>
    </div>
   );
}


export default Header;