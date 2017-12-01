import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

import './style.scss';

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
      acc[item] = '';
      return acc;
    }, {});
  }

  componentDidMount(){
    this.setView(this.props.menu.active);
  }

  componentWillReceiveProps(nextProps){
    console.log('update2')

    this.setView(nextProps.menu.active);
    this.activeItem = nextProps.menu.active;
  }

  // setClassesAndStyles(classes, styles){
  //   // console.log('here')
  //   // let styles = JSON.parse(JSON.stringify(this.state.styles));
  //   // let styles = this.initalizeStyles();
  //   // styles[item].animationDelay = delay + 'ms';
  //   this.setState({
  //     classes: classes,
  //     styles: styles
  //   });
  // }

  // setClasses(classes){
  //   // let classes = this.initalizeClasses();
  //   // let classes = JSON.parse(JSON.stringify(this.state.classes));
  //   // classes[item] = className;
  //   this.setState({ classes: classes });
  // }

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
    console.log('update')
    let menuItems = this.props.menu.items;
    let activeIndex = menuItems.indexOf(this.activeItem);
    let newActiveIndex = menuItems.indexOf(newActiveItem); 
    let styles = this.initalizeStyles(menuItems);
    let classes = this.initalizeClasses(menuItems);
    styles[menuItems[newActiveIndex]].visibility = 'visible';
    styles[menuItems[activeIndex]].visibility = 'visible';
    if (activeIndex < newActiveIndex) {
      for( let i = activeIndex; i < newActiveIndex; i++ ){
        console.log('update3');
        classes[menuItems[i]] = 'zoom-out-leave';
        styles[menuItems[i]] = { animationDelay: ((i - activeIndex) * 100)+'ms' };
        // this.setClassForItem( menuItems[i], 'zoom-out-leave');
        // this.setDelayForItem( menuItems[i], i*300 );
      }
    } else {
      // styles[menuItems[newActiveIndex]].visibility = 'visible';
      for( let i = activeIndex - 1; i > newActiveIndex - 1; i-- ){
        console.log('update4', i, activeIndex - i)
        classes[menuItems[i]] = 'zoom-in-enter';
        styles[menuItems[i]] = { animationDelay: ((activeIndex - i - 1) * 100)+'ms', visibility: 'hidden' };
      }
    }
    console.log(styles);
    this.setState({
      classes: classes,
      styles: styles
    });
  }

  renderAllViews(){
    return this.props.menu.items.map(item => this.getViewForItem(item));
  }

  // changeView(view) {
  //   this.setState({ activeView: view });
  // }

  // renderView(newActiveIndex) {
  //   let activeIndex = this.props.menu.items.indexOf(this.activeItem);
  //   if (activeIndex == newActiveIndex) {
  //     return this.getViewForItem(newActiveIndex);
  //   }

  //   return this.getViewForItem(newActiveIndex);
  // }

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
