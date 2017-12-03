import React, { Component } from 'react';

import './style.scss';

export default function Home(){
  return (
    <div className="view-home">
      <div className="home-container">
        <p className="home-title">brayn003</p>
        <div>
          <p className="home-tags"><span className="typcn typcn-pencil"></span>&nbsp;Designer</p>
          <p className="home-tags"><span className="typcn typcn-lightbulb"></span>&nbsp;Ideator</p>
          <p className="home-tags"><span className="typcn typcn-device-desktop"></span>&nbsp;Developer</p>
        </div>
      </div>
    </div>
  );
}