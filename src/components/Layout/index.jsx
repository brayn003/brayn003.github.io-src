import React, { Component } from 'react';

import Sidebar from '../Sidebar';

import './style.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="container-fluid"></div>
      </div>
    );
  }
}