import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

class MainView extends Component{
  constructor(props) {
    super();
    this.activeItem = props.menu.active;
    this.state = {
      styles: this.initalizeStyles(props.menu.items),
      classes: this.initalizeClasses(props.menu.items)
    };
  }

  initalizeStyles(menuItems){
    return menuItems.reduce((acc, item) => { 
      acc[item] = { visibility: 'hidden'};
      return acc;
    }, {});
  }

  initalizeClasses(menuItems){
    return menuItems.reduce((acc, item) => { 
      acc[item] = 'view-container';
      return acc;
    }, {});
  }

  componentDidMount(){
    this.setView(this.props.menu.active);
  }

  componentWillReceiveProps(nextProps){
    this.setView(nextProps.menu.active);
    this.activeItem = nextProps.menu.active;
  }

  getViewForItem(menuItem){
    let view;
    switch(menuItem){
      case 'about':
        view = <About />;
        break;
      case 'projects':
        view = <Projects />;
        break;
      case 'contact':
        view = <Contact />;
        break;
      case 'home':
      default:
        view = <Home />;
        break;
    }
    return (
      <div className={ this.state.classes[menuItem] } key={ menuItem } style={ this.state.styles[menuItem] } >
        { view }
      </div>
    );
  }

  setView(newActiveItem){
    let menuItems = this.props.menu.items;
    let activeIndex = menuItems.indexOf(this.activeItem);
    let newActiveIndex = menuItems.indexOf(newActiveItem); 
    let styles = this.initalizeStyles(menuItems);
    let classes = this.initalizeClasses(menuItems);
    if (activeIndex != newActiveIndex) {
      styles[menuItems[newActiveIndex]].visibility = 'visible';
      styles[menuItems[activeIndex]].visibility = 'hidden';
    } else {
      styles[menuItems[activeIndex]].visibility = 'visible';
    }

    if (activeIndex < newActiveIndex) {
      for( let i = activeIndex; i <= newActiveIndex; i++ ){
        if (i != newActiveIndex) {
          classes[menuItems[i]] = 'view-container zoom-out-leave';
        } else {
          classes[menuItems[i]] = 'view-container zoom-in-enter';
        }
        styles[menuItems[i]] = { animationDelay: ((i - activeIndex) * 100)+'ms', visibility: 'hidden' };
      }
    } else {
      for( let i = activeIndex; i > newActiveIndex - 1; i-- ){
        if (i != newActiveIndex) {
          classes[menuItems[i]] = 'view-container zoom-in-leave';
        } else {
          classes[menuItems[i]] = 'view-container zoom-out-enter';
        }
        styles[menuItems[i]] = { animationDelay: ((activeIndex - i - 1) * 100)+'ms', visibility: 'hidden' };
      }
    }
    this.setState({
      classes: classes,
      styles: styles
    });
  }

  renderAllViews(){
    return this.props.menu.items.map(item => this.getViewForItem(item));
  }

  render(){
    return (
      <div className="main-view">
        { this.renderAllViews() }
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(MainView);
