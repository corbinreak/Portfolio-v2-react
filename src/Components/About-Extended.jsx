import React, { useState, useEffect } from 'react';
import ProfilePic from '../assets/Corbin-Reak.jpeg'; 


function AboutExtended({ darkMode, setDarkMode }) {
   const [ formData, setFormData ] = useState({
        email: '',
        subject: '',
        message: ''
   });
   const [ isSubmitting, setIsSubmitting ] = useState(false);
   const [ submitMessage, setSubmitMessage ] = useState('');

   const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
        const response = await fetch('http://localhost:3001/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if(response.ok) {
            setSubmitMessage('Email sent successfully! Thank you for reaching out.');
            setFormData({
                email: '',
                subject: '',
                message: ''
            });
        } else {
            setSubmitMessage(`Error: ${data.error || 'Failed to send email. Please try again later.'}`);
        }
    } catch (error) {
        setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
        setIsSubmitting(false);
     }
    };
   
   
    const containerStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
        marginTop: '68px',
        marginLeft: '55px',
        width: '100%',
   }


   const imgStyle = {
    width: '180px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginRight: '32px',
    marginLeft: '155px',
    zoom: '200%',

   }


   const articleStyle = {
        flex: 1,
        maxWidth: '800px',
        fontSize: '1.0rem',
        lineHeight: '2.0',
        textAlign: 'center',
}

const dividerStyle = {
    border: '1px solid #808080',
    width: '100%',
    margin: '20px 0',
    backgroundColor: darkMode ? '#FFFFFF' : '#000000',
    height: '80px'
}


const laungageStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginLeft: '15px',
}

const listStyle = {
    listStyleType: 'none',
    padding: 15,
    marginBottom: '15px',
    marginTop: '15px',
    gap: '20px',
    width: '80%'
}


const formContainerStyle = {
    backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: darkMode ? ' 0 4px 12px rgba(255, 255, 255, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    border: darkMode ? '1px solid #444444' : '1px solid #e0e0e0',

}

const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    margin: '8px 0',
    border: darkMode ? '1px solid #555555' : '1px solid #dddddd',
    borderRadius: '8px',
    backgroundColor: darkMode ? '#333333' : '#ffffff',
    color: darkMode ? '#ffffff' : '#333333',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease'
};

const textareaStyle = {
    ...inputStyle,
    heigh: '120px',
    resize: 'vertical',
    fontFamily: 'inherit',
};

const buttonStyle = {
    width: '100%',
    padding: '12px 20px',
    marginTop: '16px',
    backgroundColor: darkMode ? '#007bff' : '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    opacity: isSubmitting ? 0.7 : 1,
    transition: 'background-color 0.3s ease, opacity 0.3s ease',
};


    return (
<>

        <div className="about-image-container" style={containerStyle}>
            <img style={imgStyle} src={ProfilePic} alt="Corbin Reak" /> {/* Placeholder untill i can upload a photo of me */}
            <div className='about-extended-content' style={articleStyle}>
             <h2>
                 Hello, i'm Corbin Reak. I am a 22 Year old Colorado native, who is passionate about web development.
             </h2>
                 <article>
                     <p>
                        Welcome to my website! As you know I am currently a student at the University of Phoenix, where I am pursuing a degree in Computer Science.
                        <br /> My journey into the world of technology began with a fascination for how things work, and it has since evolved into a passion for creating innovative solutions through software development.
                        I started on Codecademy.com where they taught me the basics of HTML, CSS, and JavaScript. From there I moved on to more advanced topics such as React and Node.js.
                        I have a couple projects that I have worked on, from being my very first portfolio. To this more advanced reactive portfolio.
                        <br /> I am always looking for new challenges and opportunities to learn and grow in the field of software development. I believe that technology has the power to change the world, and I am excited to be a part of that change.
                         I have to thank my grandfather for inspiring me to get into coding. He was a Sr. Software Engineer at a couple big companies. Ever since he showed me a couple lines of code I have always dabbled and learned a little more each time.
                        <br /> If you would like to get in touch with me, feel free to reach out through the contact form on this website or connect with me on LinkedIn. I am always open to discussing new ideas and opportunities.

                    </p>
                 </article>
            </div>
        </div>
        <div className="Section-Seperator" style={dividerStyle}>
        </div>
         <div className="known-languages" style={laungageStyle}>
            <h3>Known Languages & Familiarity:</h3>
              <ul style={listStyle}>
                <li style={listStyle}>
                    React
                    <div className='graph' style={{ width: '90%', height: '19px', borderRadius:'8px', backgroundColor: 'purple', marginLeft: '25px', marginTop: '5px', color: 'white', textAlign: 'center' }}><p>4 Months</p></div>
                </li>
                <li style={listStyle}>
                    Node.js
                    <div className='graph' style={{ width: '85%', height: '19px', borderRadius:'8px', backgroundColor: 'orange', marginLeft: '25px', marginTop: '5px', color: 'white', textAlign: 'center' }}><p>4 Months</p></div>
                </li>
                <li style={listStyle}>
                    JavaScript
                <div className='graph' style={{ width: '80%', height: '19px', borderRadius:'8px', backgroundColor: 'orange', marginLeft: '25px', marginTop: '5px', color: 'white', textAlign: 'center' }}><p>6 Months</p></div>
                </li>
                <li style={listStyle}>
                    CSS
                    <div className='graph' style={{ width: '75%', height: '19px', borderRadius:'8px', backgroundColor: 'blue', marginLeft: '25px', marginTop: '5px', color: 'white', textAlign: 'center' }}><p>5 Months</p></div>
                </li>
                <li style={listStyle}>
                    HTML
                    <div className='graph' style={{ width: '75%', height: '19px', borderRadius:'8px', backgroundColor: 'red', marginLeft: '25px', marginTop: '5px', color: 'white', textAlign: 'center' }}><p>5 Months</p></div>
                </li>
                
               
              </ul>
        </div>
        <div className="Section-Seperator" style={dividerStyle}>
        </div>
        <div className="contact-info" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3>Email me with any opportunities or collaborations:</h3>
            <div className='contact-container' style={formContainerStyle}>
               <form onSubmit={handleSubmit}>
                <div>
                <input
                 type="email"
                 name="email"
                 placeholder="Your Email"
                 value={formData.email}
                 onChange={handleChange}
                 required 
                 style={inputStyle} 
                />
                </div>
                <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  style={inputStyle} 
                />
                </div>
                <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                />
                </div>
                <button 
                    type="submit"
                    disabled={isSubmitting} 
                    style={buttonStyle}
                    >
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                    </button>
               </form>
                {submitMessage && (
                      <p style={{ 
                        marginTop: '10px', 
                        padding: '12px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        backgroundColor: submitMessage.includes('successfully') ? '#d4edda' : '#f8d7da',
                        color: submitMessage.includes('successfully') ? '#155724' : '#721c24',
                        border: submitMessage.includes('successfully') ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
                       }}>
                            {submitMessage}
                      </p>
                 )}
               </div>
          </div>  
        </>
    );
}

export default AboutExtended;