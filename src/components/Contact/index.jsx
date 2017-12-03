import React, { Component } from 'react';

import './style.scss';
import facebookIcon from '../../images/icon-facebook.png';
import twitterIcon from '../../images/icon-twitter.png';
import linkedinIcon from '../../images/icon-linkedin.png';


export default function Contact(){
  return(
    <div className="view-contact">
      <div className="contact-container">
        <p className="contact-text">Get in touch with me at <a href="mailto:brayn003@gmail.com">brayn003@gmail.com</a>. Also find me here ...</p>
        <div className="contact-container-third">
          <a target="_blank" href="https://www.facebook.com/Rdrockz"><img src={ facebookIcon } /></a>
        </div>
        <div className="contact-container-third">
          <a target="_blank" href="https://twitter.com/brayn003"><img src={ twitterIcon } /></a>
        </div>
        <div className="contact-container-third">
          <a target="_blank" href="www.linkedin.com/in/rudraprasaddas"><img src={ linkedinIcon } /></a>
        </div>
      </div>
    </div>
  );
}