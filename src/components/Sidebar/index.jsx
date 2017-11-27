import React, { Component } from 'react';

import './style.scss';

export default class Sidebar extends Component {

  constructor() {
    super();
    this.itemHeight = 80;
    this.activeItemHeight = 100;
    this.menuItems = ['home', 'about', 'projects', 'contact'];
    this.state = {
      activeMenu: 'home',
      menuTop: this.calculateTop('home')
    };
  }

  calculateTop(activeMenu) {
    let activeMenuIndex = this.menuItems.indexOf(activeMenu);
    let top = ((window.innerHeight/2) - (activeMenuIndex * this.itemHeight) - (this.activeItemHeight/2));
    return top;
  }

  onClickItem(item) {
    this.setState({ 
      activeMenu: item,
      menuTop: this.calculateTop(item)
    });
  }

  renderMenuItems() {
    return this.menuItems.map((item, index) => (
      <li key={item} className={item === this.state.activeMenu ? 'active' : ''}>
        <a onClick={() => { this.onClickItem(item) }}>{item}</a>
      </li>
    ))
  }

  render() {
    return (
      <div className="sidebar">
        <ul style={{ top: this.state.menuTop }}>
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  }
}