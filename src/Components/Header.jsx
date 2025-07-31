import React from 'react';
import toggleIcon from '../assets/download.svg';
import '../App.css';


function Header({ darkMode, setDarkMode }) {

    // Styling for the header

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #808080',
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
        top: 0,
        left: 0,
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        boxSizing: 'border-box',
        height: '60px'
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

    return (
      <div className='header' style={headerStyle}>
        <div className='home' style={{ marginLeft: '55px'}} > 
            <a href="#" style={linkStyle}>
              <h1 style={homeStyle}>Home</h1>
            </a>
      </div>


      <div className='right-group' style={rightGroupStyle}>
         <a href='#' style={linkStyle}>
          <h1 style={homeStyle}>About</h1>
         </a>
         <a className='toggle' href='#'>
           <img src={toggleIcon} alt="toggle-mode" onClick={() => setDarkMode(prev => !prev)} style={toggleStyle} />
        </a>
      </div>
      
       
         
        
      </div>
    )
}


export default Header;