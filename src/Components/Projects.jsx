import React from 'react'; 
import Project1 from '../assets/Portfoliov1.jpg'; 
import Project2 from '../assets/Project2.jpg';



function Projects({ darkMode, setDarkMode }) {  
    

    const listStyle = {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        padding: '20px',
        maxWidth: '1400px', // or whatever fits your images
        margin: '0 auto',   // centers the ul horizontally
        width: '100%',
    };


    const imagesContainer = {
        display: 'flex',
        justifyContent: 'center',    // Center images horizontally
        alignItems: 'flex-end',      // Align images to the bottom
        width: '100%',
        gap: '20px',
    }
    
    const imgStyleLeft = {
        width: '600px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
        marginBottom: '40px',        // Raise the left image
    }

    const imgStyleRight = {
        width: '600px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
        // No marginBottom, so it stays lower
    }

    return (
        <>
         <ul style={listStyle}>
            <li>
              <div style={imagesContainer}>
                <a href="" >
                    <img
                       src={Project1} 
                       style={imgStyleLeft}>
                    </img>
                </a>
                <a href="" >
                    <img
                       src={Project2} 
                       style={imgStyleRight} >
                    </img>
                </a>
             </div>
            </li>
         </ul>
        </>
    )
}


export default Projects;