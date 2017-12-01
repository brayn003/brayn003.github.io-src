import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MainView from '../MainView';
import Background from '../Background';

import './style.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-view-container">
          <Background bgColor="#FF00FF" />
          <MainView />
        </div>
      </div>
    );
  }
}