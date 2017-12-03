import React, { Component } from 'react';
import Granim from 'granim';
import { connect } from 'react-redux';

class Background extends Component{
  constructor() {
    super();
    this.bgGradient;
  }

  componentDidMount() {
    this.bgGradient = this.renderGradient();
  }

  componentWillReceiveProps(nextProp) {
    this.bgGradient.changeState(nextProp.menu.active);
  }

  renderGradient() {
    return new Granim({
        element: '#bg-canvas',
        name: 'basic-gradient',
        direction: 'diagonal',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 500,
        defaultStateName: 'home',
        states: {
          home: {
            gradients: [
              ['#AA076B', '#61045F'],
              ['#02AAB0', '#00CDAC']
            ],
          },
          about: {
            gradients: [
              ['#9D50BB', '#6E48AA'],
              ['#4776E6', '#8E54E9']
            ],
          },
          projects: {
            gradients: [ 
              ['#FF4E50', '#F9D423'],
              ['#1A2980', '#26D0CE']
            ],
          },
          contact: {
            gradients: [ 
              ['#29323c', '#485563'],
              ['#FF6B6B', '#556270']
            ],
          }
        }
    });
  }

  render() {
    return (
      <div className="background">
        <canvas id="bg-canvas" />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Background);