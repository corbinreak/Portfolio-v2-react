import React from 'react'; 
import Project1 from '../assets/Portfoliov1.jpg'; 
import Jammming from '../assets/Jammming.jpg';
import ABC from '../assets/ABC-Studio-Fitness.png'; 
import { Link } from 'react-router-dom';



function Projects({ darkMode, setDarkMode }) {  
    

    const listStyle = {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        padding: '20px',
        maxWidth: '1400px', 
        margin: '0 auto',   
        width: '100%',
    };


    const imagesContainer = {
        display: 'flex',
        justifyContent: 'center',    
        alignItems: 'flex-end',      
        width: '100%',
        gap: '20px',
    }
    
    const imgStyleLeft = {
        width: '600px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
        marginBottom: '40px',       
    }

    const imgStyleRight = {
        width: '600px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
        
    }

    return (
        <>
         <ul style={listStyle}>
            <li>
              <div className='projects-container'>
                    <Link to="/Project1" className='project-link'>
                        <img
                          src={Project1} 
                          style={imgStyleLeft} 
                        />
                    </Link>

                    <Link to="/Project2" className='project-link'>
                        <img
                          src={Jammming} 
                          style={imgStyleRight} 
                        />
                    </Link>
                    <Link to="/Project3" className='project-link'>
                        <img
                          src={ABC} 
                          style={imgStyleRight} 
                        />
                    </Link>
             </div>
            </li>
         </ul>
        </>
    )
}


export default Projects;