import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MainView from '../MainView';
import Background from '../Background';
import CursorDisplay from '../CursorDisplay';
import ProjectModal from '../ProjectModal';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="sidebar-container xs-hidden">
          <Sidebar />
        </div>
        <div className="main-view-container">
          <Background bgColor="#FF00FF" />
          <MainView />
          <div className="bottom-right xs-hidden">
            <CursorDisplay />
          </div>
          <ProjectModal />
        </div>
      </div>
    );
  }
}