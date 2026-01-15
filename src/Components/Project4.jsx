import React from 'react';
import { Link } from 'react-router-dom';
import PC from '../assets/PC_BUILDERZ.png';

function Project4({ darkMode, setDarkMode }) {
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
    };


    return (
    <>
        <div style={containerStyle}>
            <Link to="/" style={linkStyle}>
                <span>Back to Projects</span>
            </Link>
         
         {/* Header Section*/}
            <section style={sectionStyle}>
                <h2>PC Builderz</h2>
                <p style={{ fontSize: '18px', color: darkMode ? '#cccccc' : '#666666' }}>
                    PC Builderz is a tool designed to simplify the process of selecting compatible PC components. This is my newest project where I focused on creating an intuitive user interface and ensuring component compatibility.
                </p>
            </section>

        <div style={contentStyle}>
            {/*Image Section*/}
            <div style={imageContainerStyle}> 
                <img src={PC} alt="PC Builderz" style={imgStyle} />
            </div>

           {/*Description Section*/}
            <section style={sectionStyle}>
                <h2>Description</h2>
                <p>
                    PC Builderz is a comprehensive hardware configuration tool built with React to simplify the complex process of PC component selection. 
                    The application features a sophisticated compatibility engine that validates hardware pairings in real-time, preventing common building errors. 
                    By implementing a modular component architecture and advanced state management, I created a platform that delivers dynamic price calculations and power consumption estimates, ensuring a data-driven and seamless experience for custom PC enthusiasts.
                </p>
            </section>

           {/* What I Learned */}
            <section style={sectionStyle}>
                <h2>What I Learned</h2>
                <ul>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>Component Compatibility:</strong> Learned how to implement logic that checks for hardware compatibility, such as matching CPU sockets with motherboard chipsets.
                    </li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>Data Management:</strong> Gained experience handling large arrays of component data and using filters to help users find parts based on price or performance.
                    </li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>Real-Time Calculations:</strong> Developed a system to dynamically calculate total build cost and power requirements (TDP) as parts are added or removed.
                    </li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>State Persistence:</strong> Improved my understanding of maintaining a user's "shopping cart" or "build list" across different categories and views.
                    </li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>User Experience Design:</strong> Focused on creating a step-by-step workflow that simplifies the complex process of picking PC parts for beginners.
                    </li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <strong>Conditional Rendering:</strong> Mastered showing and hiding specific hardware details based on user selection to keep the interface clean and organized.
                    </li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section style={sectionStyle}>
                <h2>
                Technologies Used
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <span style={techBadgeStyle}>React 18</span>
                    <span style={techBadgeStyle}>TypeScript</span>
                    <span style={techBadgeStyle}>Tailwind CSS</span>
                    <span style={techBadgeStyle}>Lucide Icons</span>
                    <span style={techBadgeStyle}>State Management (Hooks)</span>
                    <span style={techBadgeStyle}>Conditional Rendering</span>
                    <span style={techBadgeStyle}>Dynamic Math Logic</span>
                    <span style={techBadgeStyle}>Responsive Design</span>
                </div>
            </section>

            {/* Key Features */}
            <section style={sectionStyle}>
                <h2>Key Features</h2>
                <ul>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Real-time hardware compatibility checking.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Dynamic total cost and wattage estimation.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Comprehensive component database search.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Step-by-step guided configuration flow.</li>
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}>Simple but clean hardware dashboard.</li>
                </ul>
            </section>

            {/* Reflection & Growth */}
            <section style={sectionStyle}>
                <h2>Reflection & Growth</h2>
                <p>
                    This project allowed me to deepen my understanding of React and TypeScript, 
                    particularly in managing complex state and ensuring component compatibility. 
                    I learned how to create a user-friendly interface that guides users through the process of building a PC, 
                    while also handling real-time calculations and dynamic data updates. The experience reinforced the importance of 
                    thoughtful UX design and efficient state management in creating responsive and interactive web applications.
                </p>
            </section>

            {/* Links */}
            <section style={sectionStyle}>
                <h2>Project Link</h2>
                <div style={{ display: 'flex', gap: '10px', flexWrap:'wrap'}}>
                    <a href="https://github.com/corbinreak/PC_Builderz" target="_blank" rel="noopener noreferrer" style={{...linkStyle, backgroundColor: '#24292f'}}>
                        GitHub Repository
                    </a>
                </div>
            </section>
        </div>
    </div>
    </>
    )
}

export default Project4;