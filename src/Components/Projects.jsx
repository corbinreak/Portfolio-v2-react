import React from 'react'; 
import Project1 from '../assets/Portfoliov1.jpg'; // Example project image



function Projects({ darkMode, setDarkMode }) {  
    
    
    const imgStyle = {
        width: '800px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
    }
 


    return (
        <>
         <ul>
            <li>
                <a href="" >
                    <img
                       src={Project1} 
                       style={imgStyle}>
                    </img>
                </a>
            </li>
         </ul>
        </>
    )
}


export default Projects;