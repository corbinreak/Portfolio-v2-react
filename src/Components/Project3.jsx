import React from 'react';
import { Link } from 'react-router-dom';
import ABC from '../assets/ABC-Studio-Fitness.png'


function Project3({ darkMode, setDarkMode }) {
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
                <h1>ABC Studio Fitness</h1>
                <p style={{ fontSize: '18px', color: darkMode ? '#cccccc' : '#666666' }}> 
                    This is my first college course following my CS Degree. This project involved developing a fitness studio website.
                </p>
            </div>

            <div style={contentStyle}>
                {/*Image section*/}
                <div style={imageContainerStyle}>
                    <img src={ABC} alt="ABC Studio Fitness" style={imgStyle} />
                </div>

                <section style={sectionStyle}>
                    <h2>Project Overview</h2>
                    <p style={{ fontSize: '16px', color: darkMode ? '#cccccc' : '#666666' }}>
                        Engineered a comprehensive fitness studio platform featuring dynamic training schedules, 
                        a persistent feedback system, and automated subscription features. Leveraged JavaScript Web Storage API
                        to manage user data locally and implemented responsive CSS to ensure a seamless UX across mobile and desktop environments.
                    </p>
                </section>

                {/*What I learned*/}
                <section style={sectionStyle}>
                    <h2>What I Learned</h2>
                    <ul>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Client-Side Persistence:</strong> Implemented the Web Storage API (localStorage and sessionStorage) to manage application state and persist user data without a backend database.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Event-Driven Programming:</strong> Developed interactive features using JavaScript event listeners to manipulate the DOM and provide real-time UI feedback.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Architecture & Layout:</strong> Applied CSS Flexbox and responsive design principles to create a fluid UI that adapts to varying viewport dimensions and device types.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Technical Problem Solving:</strong> Successfully debugged environment-specific issues, such as resolving a 405 Method Not Allowed error by refactoring form submission logic for static hosting.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Web Accessibility (a11y):</strong> Conformed to WCAG standards by implementing high-contrast color palettes (9.44:1 ratio) and semantic HTML for screen-reader compatibility.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Version Control & Deployment:</strong> Managed the software development lifecycle using Git for version control and successfully deployed the production build via GitHub Pages.</li>
                    </ul>
                </section>

                {/* Technologies Stack */}
                <section style={sectionStyle}>
                    <h2>Technologies Used</h2>
                    <div style={techStackStyle}>
                        <span style={techBadgeStyle}>HTML5</span>
                        <span style={techBadgeStyle}>CSS3 (Flexbox)</span>
                        <span style={techBadgeStyle}>JavaScript (ES6+)</span>
                        <span style={techBadgeStyle}>Web Storage API</span>
                        <span style={techBadgeStyle}>React</span>
                        <span style={techBadgeStyle}>Git</span>
                        <span style={techBadgeStyle}>GitHub Pages</span>
                    </div>
                </section>

                {/* Key Features */}
                <section style={sectionStyle}>
                    <h2>Key Features</h2>
                    <ul>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>E-Commerce Simulation:</strong> Developed a functional "Add to Cart" system using JavaScript to manage session-based state for fitness products and classes.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Client-Side Data Persistence:</strong> Engineered a multi-page data flow using the Web Storage API (localStorage and sessionStorage) to handle user inquiries and shopping cart items.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Dynamic User Feedback:</strong> Implemented real-time UI notifications and input validation to guide users through the subscription and checkout processes.</li>
                        <li style={{ marginTop: '10px', marginBottom: '10px' }}><strong>Responsive Branding:</strong> Designed a professional, high-contrast interface using a specialized fitness color palette and flexible CSS layouts for cross-device compatibility.</li>
                    </ul>
                </section>

                {/* Lessons & Growth */}
                <section style={sectionStyle}>
                    <h2>Lessons & Growth</h2>
                    <p>
                        Looking back at this project, I can see how much I've grown as a developer. 
                        This project challenged me to think critically about user experience, 
                        data management, and responsive design. I learned how to effectively use the Web Storage API 
                        (localStorage and sessionStorage) to maintain state across different pages and how to create a seamless, interactive user interface. 
                        These skills have been invaluable in my journey to becoming a more proficient and versatile developer.
                    </p>
                </section>

                {/* Project Links */}
                <section style={sectionStyle}>
                    <h2>Project Link</h2>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/corbinreak/ABC-Studio-Fitness"
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

export default Project3;