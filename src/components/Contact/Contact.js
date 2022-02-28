import React from 'react';
import { Icon } from 'semantic-ui-react';


import './Contact.scss';


function Contact() {

    return (
        <div id="contact-me-div" className="contact-me full-height">
            <h1 className="section-header">CONTACT ME</h1>
            <div className="contact-details">
                <Icon className="email-icon" name="envelope" />
                    <h2 className="email-content"> Connereg@optonline.net</h2>
                <Icon className="linkedin-icon" name="linkedin" />
                <a href="https://www.linkedin.com/in/conner-gleason/">
                    <h2 className="linkin-content">Link To LinkedIn Profile</h2>
                </a>
                <Icon className="gitHub-icon" name="github" />
                <a href="https://github.com/Connereg">
                    <h2 className="github-content">Link to Github Profile</h2>
                </a>
            </div>
        </div>
        
    )
}

export default Contact;