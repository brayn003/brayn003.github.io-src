import React, { Component } from 'react';
import { connect } from 'react-redux';
import keydown from 'react-keydown';
import { withRouter } from 'react-router-dom';

import Carousel from 'nuka-carousel';

import imgEd from '../../images/project-ed.png';
import imgAlphajuice from '../../images/project-alphajuice.png';
import imgAt from '../../images/project-ajay.png';
import snapSoundPath from '../../sounds/snap.mp3';

const decorators = [{
  component: (props) => {
    return (
      <button style={{ opacity: (props.currentSlide == 0 ? 0.4 : 1) }} className="slider-clear-btn" onClick={props.previousSlide}>
        <span style={{ fontSize: 34 }} className="typcn typcn-chevron-left" />
      </button>
    )
  },
  position: 'CenterLeft',
  style: {
    left: 100
  }
}, {
  component: (props) => {
    return (
      <button style={{ opacity: (props.currentSlide == (props.slideCount - 1) ? 0.4 : 1) }} className="slider-clear-btn" onClick={props.nextSlide}>
        <span style={{ fontSize: 34 }} className="typcn typcn-chevron-right" />
      </button>
    )
  },
  position: 'CenterRight',
  style: {
    right: 100
  }
}, {
  component: (props) => {
    const pagination = [...Array(props.slideCount)].map((item, index) => index);
    return (
      <div className="slide-pagination">
      { 
        pagination.map((slideIndex) => (
          <button 
            className="slider-clear-btn" 
            key={ slideIndex } 
            onClick={() => props.goToSlide(slideIndex)}
          >
            <span 
              style={{ opacity: (slideIndex != props.currentSlide ? 0.4 : 1) }} 
              className="typcn typcn-media-record" 
            />
          </button>
        ))
      }
    </div>
    )
  },
  position: 'BottomCenter',
  style: {
    bottom: -100
  }
}];

class Projects extends Component{
  constructor() {
    super();
    this.decorators = decorators;
  }

  playSnapSound() {
    let snapSound = new Audio();
    snapSound.src = snapSoundPath;
    snapSound.play();
  }

  @keydown('left')
  goToPrevSlide(){
    if (this.props.menu.active == 'projects') {
      this.playSnapSound();
      this.refs.carousel.previousSlide();    
    }
  }

  @keydown('right')
  goToNextSlide(){
    if (this.props.menu.active == 'projects') {
      this.playSnapSound();
      this.refs.carousel.nextSlide();    
    }
  }


  render() {
    return(
      <div className="view-projects">
          <Carousel ref="carousel" decorators={ this.decorators }>
            <div>
                <div style={{ height: 700 }}>
                  <div style={{ width: '50%', float: 'left', display: 'inline-block', height: '100%' }}>
                    <div 
                      className="img-container" 
                      style={{ backgroundImage: 'url("'+ imgEd +'")', height: '100%' }} 
                    />
                  </div>
                  <div style={{ width: '38%', float: 'left', display: 'inline-block' }}>
                    <p className="slide-title" >English Duniya</p>
                    <p className="slide-caption" >Learning English was never so interesting. English Duniya blends learning with fun.
                     The products core is the recommendation engine that recognizes a student's level and unlocks new lessons based on it. 
                     <br /><br />The app is made on Cordova platform and uses Phaser for rendering the gaming elements. Rest of the app is made on Ionic framework. It is also showcased on the Ionic site.
                     <br /><br />Currently, the app caters to almost 5000 kids.</p>
                  </div>
                </div>
            </div>
            <div>
                <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
                  <div 
                    className="img-container" 
                    style={{ backgroundImage: 'url("'+ imgAlphajuice +'")', width: '100%', height: 400 }} 
                  />
                  <p className="slide-title">AlphaJuice</p>
                  <p className="slide-caption">Hackathon prototype, the app gamifies the whole experience of learning new words. And it is suitable for all age groups.
                  <br /><br />It is made on Cordova platform and utilizes Phaser as it's framework. Almost all of the app is written purely in Javascript. And it was developed in a span of just two days.
                  </p>
                </div>
            </div>
            <div>
              <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
                <div 
                  className="img-container" 
                  style={{ backgroundImage: 'url("'+ imgAt +'")', width: '100%', height: 400 }} 
                />
                <p className="slide-title">Ajay Talwar Photography</p>
                <p className="slide-caption">A really beautiful portfolio site for a Delhi based astro-photographer, Mr. Ajay Talwar. The photographs and videos are breathtaking.
                <br /><br />One of my very first projects. It is made on Wordpress platform.
                </p>
              </div>
            </div>
          </Carousel>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default withRouter(connect(mapStateToProps)(Projects));