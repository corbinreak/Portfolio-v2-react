import React from 'react';
import { Link } from 'react-router-dom';
import Portfoliov1 from '../assets/Portfoliov1.png';


function Project1({ darkMode, setDarkMode }) {
    const containerStyle = {
       maxWidth: '1200px',
       margin: '40px auto',
       padding: '40px 20px',
       backgroundColor: darkMode ? '#121212' : '#f5f5f5',
       color: darkMode ? '#ffffff' : '#333333',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '40px',
    };


    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    };

    const imageContainerStyle = {
        textAlign: 'center',
    };

    const imgStyle = {
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: darkMode ? '0 8px 24px rgba(255, 255, 255, 0.1)' : '0 0 10px rgba(0, 0, 0, 0.15)',
    };

    const sectionStyle = {
        marginBottom: '30px',
    };

    const techStackStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '15px',
    };

    const techBadgeStyle = {
        padding: '8px 16px',
        borderRadius: '20px',
        backgroundColor: darkMode ? '#333333' : '#f0f0f0',
        color: darkMode ? '#ffffff' : '#333333',
        fontSize: '14px',
        border: darkMode ? '1px solid #555555' : '1px solid #dddddd',
    };


    const linkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
        backgroundColor: darkMode ? 'red' : 'red',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '8px',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease',
    }

    return (
       <>
         <div style={containerStyle}>
            <Link to="/" style={linkStyle}>
                <span>Back to Projects</span>
            </Link>
        

         <div style={headerStyle}>
            <h1>Portfolio v1</h1>
            <p style={{ fontSize: '18px', color: darkMode ? '#cccccc' : '#666666' }}>
                My Journey into Web Development
            </p>
         </div>

         <div style={contentStyle}>
            {/* Image Section */}
            <div style={imageContainerStyle}>
                 <img src={Portfoliov1} alt='Portfolio v1 screenshot' style={imgStyle} />
            </div>

            {/* Description Section */}
            <section style={sectionStyle}>
                <h2>Project Overview</h2>
                <p>
                    This was my very first portfolio project website, created when I was just starting out my
                    journey into web development. It showcases my initial skills and understanding of HTML, CSS, and JavaScript.
                    Also my first attempt at creating a responsive design.
                </p>
            </section>

            {/* What i learned */}
            <section style={sectionStyle}>
                <h2>What I Learned</h2>
                <ul>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>HTML Structure:</strong> How to properly structure web content with semantic HTML</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>CSS Styling:</strong> Basics of styling, layout, and responsive design principles</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>JavaScript Fundamentals:</strong> Adding interactivity and dynamic behavior</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Web Design:</strong> Understanding of color theory, typography, and user experience</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Problem Solving:</strong> Debugging code and finding solutions to technical challenges</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Version Control:</strong> First experience with Git and GitHub</li>
                </ul>
            </section>

            {/* Technologies Stack */}
            <section style={sectionStyle}>
                <h2>Technologies Used</h2>
                <div style={techStackStyle}>
                    <span style={techBadgeStyle}>HTML</span>
                    <span style={techBadgeStyle}>CSS3</span>
                    <span style={techBadgeStyle}>JavaScript</span>
                    <span style={techBadgeStyle}>Git</span>
                    <span style={techBadgeStyle}>GitHub Pages</span>
                </div>
            </section>

            {/*Key Features */}
            <section style={sectionStyle}>
                <h2>Key Features</h2>
                <ul>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Responsive design that adapts to different screen sizes</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Interactive elements using JavaScript</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Clean and simple layout focusing on content</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Accessible navigation for a better user experience</li>
                </ul>
            </section>

            {/* lessons & Growth */}
           <section style={sectionStyle}>
            <h2>Reflection & Growth</h2>
            <p>
                Looking back at this project, I can see how much I've grown as a developer. 
                While this portfolio was simple compared to my current React-based portfolio, 
                it was an essential stepping stone that taught me the fundamentals of web development. 
                The challenges I faced here motivated me to learn more advanced technologies like React, 
                Node.js, and modern development tools.
            </p>
          </section>
    
                {/* Links */}
                <section style={sectionStyle}>
                    <h2>Project Link</h2>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/corbinreak/Portfolio-Website.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...linkStyle, backgroundColor: darkMode ? '#cccccc' : '#666666'}}
                        >
                            GitHub Repository
                        </a>
                    </div>
                </section>
            </div>
         </div>
       </>
    );
}

export default Project1;