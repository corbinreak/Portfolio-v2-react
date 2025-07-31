import React from 'react'; 


function Footer({ darkMode, setDarkMode }) {

    return (
        <div className="footer-nav">
            <p className="footer-title">Get A Hold of Me!</p>
            <ul className="footer-links">
                <li><a href="https://app.joinhandshake.com/profiles/74pfkv" target="_blank" rel="noopener noreferrer">Handshake</a></li>
                <li><a href="https://www.linkedin.com/in/corbin-reak-900390214" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://github.com/CorbinReak" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.facebook.com/corbin.reak" target="_blank" rel="noopener noreferrer">FaceBook</a></li>
            </ul>
        </div>
    )
}


export default Footer;