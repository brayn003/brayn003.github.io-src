import React, { Component } from 'react';

export default function Home(){
  return (
    <div className="view-home">
      <div className="home-container">
        <p className="home-title">brayn003</p>
        <div className="clearfix home-tag-container">
          <p className="home-tags"><span className="typcn typcn-pencil"></span>&nbsp;Designer</p>
          <p className="home-tags"><span className="typcn typcn-lightbulb"></span>&nbsp;Ideator</p>
          <p className="home-tags"><span className="typcn typcn-device-desktop"></span>&nbsp;Developer</p>
        </div>
        <p className="xs-visible home-xs-message">Use a desktop. You'll be amazed!</p>
      </div>
    </div>
  );
}