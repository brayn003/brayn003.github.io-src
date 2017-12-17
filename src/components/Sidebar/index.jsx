import React, { Component } from 'react';
import ReactGA from 'react-ga';
import keydown from 'react-keydown';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setActiveMenu } from '../../reducers/Menu';

import snapSoundPath from '../../sounds/snap.mp3';

class Sidebar extends Component {

  constructor(props) {
    super();
    this.itemHeight = 80;
    this.activeItemHeight = 100;
    this.state = {
      menuTop: this.calculateTop(props.menu.active, props.menu.items)
    }
    this.routes = {
      home: '/',
      about: '/about',
      projects: '/projects',
      contact: '/contact'
    }
  }

  calculateTop(activeMenu, menuItems=null) {
    let activeMenuIndex = menuItems ? menuItems.indexOf(activeMenu) : this.props.menu.items.indexOf(activeMenu);
    let top = ((window.innerHeight/2) - (activeMenuIndex * this.itemHeight) - (this.activeItemHeight/2));
    return top;
  }

  onClickItem(item) {
    this.changeMenuTo(item);
  }

  playSnapSound() {
    let snapSound = new Audio();
    snapSound.src = snapSoundPath;
    snapSound.play();
  }

  initializeActiveMenu(path) {
    for(let menuItem in this.routes) {
      if(this.routes[menuItem] == path) {
        this.props.setActiveMenu(menuItem);    
        break;
      }
    }
    this.logPageView();
  }

  componentWillMount() {
    this.initializeActiveMenu(this.props.location.pathname);
  }

  logPageView() {
    console.log({ page: window.location.pathname + window.location.hash.replace('#/','') });
    ReactGA.set({ page: window.location.pathname + window.location.hash.replace('#/','') });
    ReactGA.pageview(window.location.pathname + window.location.hash.replace('#/',''));
  }

  changeMenuTo(item) {
    this.playSnapSound();
    this.props.setActiveMenu(item);    
    this.setState({
      menuTop: this.calculateTop(item)
    });
    this.props.history.push(this.routes[item]);
    this.logPageView();
  }

  renderMenuItems() {
    return this.props.menu.items.map((item, index) => (
      <li key={item} className={item === this.props.menu.active ? 'active' : ''}>
        <a onClick={() => { this.onClickItem(item) }}>{item}</a>
      </li>
    ))
  }

  @keydown('down')
  incrementMenuIndex() {
    let activeMenuIndex = this.props.menu.items.indexOf(this.props.menu.active);
    if( activeMenuIndex < this.props.menu.items.length - 1 ) {
      this.changeMenuTo(this.props.menu.items[++activeMenuIndex]);
    }
  }

  @keydown('up')
  decrementMenuIndex() {
    let activeMenuIndex = this.props.menu.items.indexOf(this.props.menu.active);
    if( activeMenuIndex > 0 ) {
      this.changeMenuTo(this.props.menu.items[--activeMenuIndex]);
    }
  }

  render() {
    return (
      <div style={{ display: this.props.project.active == null ? 'block' : 'none' }} className="sidebar">
        <ul style={{ top: this.state.menuTop }}>
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveMenu: setActiveMenu
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));