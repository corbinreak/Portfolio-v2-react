import React from 'react';
import { Link } from 'react-router-dom';

function About({ darkMode, setDarkMode }) {


    const articleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontSize: '1.4rem',
        lineHeight: '2.0',
        marginTop: '68px'
    }


    

    return (
        <>
            <article style={articleStyle}>
                <p>
                    Hello! My name is <span ><Link to="/about-extended" className='about-link'>Corbin Reak</Link></span>, and I am a Computer Science student at the University of Phoenix. I have a passion for software development and I am always eager to learn new technologies and improve my skills. This portfolio showcases some of my projects and experiences in the field.
                </p>
            </article>
        </>
    )
}


export default About;