import React, { Component } from 'react';

import './style.scss';

import profileImage from '../../images/rudra.jpg';

export default function About(){
  return(
    <div className="view-about">
      <div className="about-container">
        <div className="about-container-divider">
          <div style={{ backgroundImage : 'url(' + profileImage + ')'}} className="about-image animate-profile-pic" />
        </div>
        <div className="about-container-divider">
          <div className="about-details">
            Hey there, my name is <b>Rudra</b>. I am a UX/UI developer based in Mumbai, India. 
            Currently working as a Frontend Developer with Zaya Learning Labs to build kickass educational products for kids.
          </div>

          <div className="about-badges">
            <span className="badges">ui</span>
            <span className="badges">ux</span>
            <span className="badges">design</span>
            <span className="badges">javascript</span>
            <span className="badges">css3</span>
            <span className="badges">typescript</span>
            <span className="badges">react</span>
            <span className="badges">angularjs</span>
            <span className="badges">angular</span>
            <span className="badges">vue</span>
            <span className="badges">sass</span>
            <span className="badges">node.js</span>
            <span className="badges">express</span>
            <span className="badges">socket.io</span>
            <span className="badges">hybrid apps</span>
            <span className="badges">ionic</span>
            <span className="badges">ionic2</span>
          </div>
        </div>

      </div>
    </div>
  );
}