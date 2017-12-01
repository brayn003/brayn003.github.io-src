import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MainView from '../MainView';

import './style.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="view-container">
         <MainView />
        </div>
      </div>
    );
  }
}