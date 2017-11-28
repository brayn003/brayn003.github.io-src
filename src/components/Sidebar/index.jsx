import React, { Component } from 'react';
import keydown from 'react-keydown';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveMenu } from '../../reducers/Menu';

import './style.scss';
import snapSoundPath from '../../sounds/snap.mp3';

class Sidebar extends Component {

  constructor(props) {
    super();
    this.itemHeight = 80;
    this.activeItemHeight = 100;
    this.state = {
      menuTop: this.calculateTop(props.menu.active, props.menu.items)
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

  changeMenuTo(item) {
    this.playSnapSound();
    this.props.setActiveMenu(item);    
    this.setState({
      menuTop: this.calculateTop(item)
    })  
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
      <div className="sidebar">
        <ul style={{ top: this.state.menuTop }}>
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveMenu: setActiveMenu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);