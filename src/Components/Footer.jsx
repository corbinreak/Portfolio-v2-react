import React from 'react'; 

function Footer() {

    return (
        <div className="footer-nav">
            <p style={{ color: 'black', margin: '50px 0 50px 40%', fontSize: '1.5rem'}}>Get A Hold of Me!</p>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', fontSize: '1.2rem'}}>
                    <li><a href="https://app.joinhandshake.com/profiles/74pfkv">Handshake</a></li>
                    <li><a href="https://www.linkedin.com/in/corbin-reak-900390214">Linkedin</a></li>
                    <li><a href="https://github.com/CorbinReak">Github</a></li>
                    <li><a href="https://www.facebook.com/corbin.reak">FaceBook</a></li>
            </ul>
        </div>
    )
}


export default Footer;