import React from 'react';
import { Link } from 'react-router-dom';
import Jammming from '../assets/Jammming.png';


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
                My first attempt integrating an API
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

            {/* What I Learned */}
            <section style={sectionStyle}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f8fafc' }}>
                What I Learned
                </h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>Complex State Management:</strong> 
                        Mastered the use of `useState` to handle nested objects, multi-step forms, and real-time synchronization across different UI views.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>TypeScript & Type Safety:</strong> 
                        Implemented union types for view switching and ensured data integrity by explicitly defining state shapes, reducing runtime errors.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>Dynamic UI Logic:</strong> 
                        Developed real-time calculation engines to transform user input (Distance/MPG) into instant visual feedback using JavaScript arithmetic.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>Component Architecture:</strong> 
                        Learned how to structure a single-page application (SPA) using conditional rendering to swap between Welcome, Signup, and Planner screens.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>UX-Focused Styling:</strong> 
                        Utilized Tailwind CSS to create an accessible, mobile-first interface with high-contrast elements and interactive loading states.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong style={{ color: '#3b82f6' }}>Simulating Workflows:</strong> 
                        Gained experience mocking API behavior with `setTimeout` to build and test user-centric features before backend integration.
                    </li>
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
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Search for any songs, albums and or artists.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Playlist creation.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Spotify Intergration.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Simple but clean layout.</li>
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
                    <h2>Project Link</h2>
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