import React from 'react';
import { Link } from 'react-router-dom';
import Jammming from '../assets/Jammming.jpg';


function Project2({ darkMode, setDarkMode }) {
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
            <h1>Jammming</h1>
            <p style={{ fontSize: '18px', color: darkMode ? '#cccccc' : '#666666' }}>
                My first attempt intergrating an API
            </p>
         </div>

         <div style={contentStyle}>
            {/* Image Section */}
            <div style={imageContainerStyle}>
                 <img src={Jammming} alt='Jammming screenshot' style={imgStyle} />
            </div>

            {/* Description Section */}
            <section style={sectionStyle}>
                <h2>Project Overview</h2>
                <p>
                    This was my first project that involved integrating an API to create a music playlist application.
                    The project allowed users to search for songs, create playlists, and save them.
                    It was built using HTML, CSS, and JavaScript, focusing on responsive design and user interaction.
                    It even allowed users to log in and save their playlists, which was a significant feature for me at the time.
                </p>
            </section>

            {/* What i learned */}
            <section style={sectionStyle}>
                <h2>What I Learned</h2>
                <ul>
                    <li><strong>API Integration:</strong> Learned how to use `try` statements effectively, along with `fetch` for making API calls and handling responses.</li>
                    <li><strong>Async Functions:</strong> Gained a deeper understanding of asynchronous programming and its importance in handling API requests.</li>
                    <li><strong>JavaScript Fundamentals:</strong> Enhanced my skills in adding interactivity and dynamic behavior to web applications.</li>
                    <li><strong>Web Design:</strong> Improved my understanding of color theory, typography, and user experience principles.</li>
                    <li><strong>Problem Solving:</strong> Developed debugging skills and learned to find solutions to technical challenges efficiently.</li>
                    <li><strong>Version Control:</strong> Acquired hands-on experience with Git and GitHub for managing code and collaborating on projects.</li>
                </ul>
            </section>

            {/* Technologies Stack */}
            <section style={sectionStyle}>
                <h2>Technologies Used</h2>
                <div style={techStackStyle}>
                    <span style={techBadgeStyle}>React</span>
                    <span style={techBadgeStyle}>Node.js</span>
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
                    <li>Search for any songs, albums and or artists.</li>
                    <li>Playlist creation.</li>
                    <li>Spotify Intergration.</li>
                    <li>Simple but clean layout.</li>
                </ul>
            </section>

            {/* lessons & Growth */}
           <section style={sectionStyle}>
            <h2>Reflection & Growth</h2>
            <p>
                This project was a significant milestone in my journey as a developer. It taught me the importance of API integration and how to handle asynchronous operations effectively. 
                I also learned how to create a user-friendly interface and ensure that the application was responsive across different devices. 
                The experience of working with real-world data and user interactions was invaluable, and it laid the foundation for my future projects.
            </p>
          </section>
    
                {/* Links */}
                <section style={sectionStyle}>
                    <h2>Project Links</h2>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/corbinreak/jammming.git"
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

export default Project2;