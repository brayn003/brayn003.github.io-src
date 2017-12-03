import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

import './style.scss';

import imgEd from '../../images/project-ed.png'
import imgAlphajuice from '../../images/project-alphajuice.png'
import imgAt from '../../images/project-ajay.png'

export default function Projects(){
  const decorators = [{
    component: (props) => {
      return (
        <button disabled={ props.currentIndex == 0 } className="slider-clear-btn" onClick={props.previousSlide}>
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
        <button disabled={ props.currentIndex == props.slideCount - 1 } className="slider-clear-btn" onClick={props.nextSlide}>
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
                style={{ opacity: (slideIndex != props.currentSlide ? 0.6 : 1) }} 
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


  return(
    <div className="view-projects">
        <Carousel decorators={ decorators }>
          <div>
              <div style={{ height: 0.7*window.innerHeight }}>
                <div style={{ width: '50%', float: 'left', display: 'inline-block', height: '100%' }}>
                  <div 
                    className="img-container" 
                    style={{ backgroundImage: 'url("'+ imgEd +'")', height: '100%' }} 
                  />
                </div>
                <div style={{ width: '50%', float: 'left', display: 'inline-block' }}>
                  <p className="slide-title" >English Duniya</p>
                  <p className="slide-caption" >English Learning app for kids</p>
                </div>
              </div>
          </div>
          <div>
              <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
                <div 
                  className="img-container" 
                  style={{ backgroundImage: 'url("'+ imgAlphajuice +'")', width: '100%', height: 0.4*window.innerHeight }} 
                />
                <p className="slide-title">Alpha Juice</p>
                <p className="slide-caption">Gamified vocabulary learning app</p>
              </div>
          </div>
          <div>
            <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
              <div 
                className="img-container" 
                style={{ backgroundImage: 'url("'+ imgAt +'")', width: '100%', height: 0.4*window.innerHeight }} 
              />
              <p className="slide-title">Ajay Talwar Photography</p>
              <p className="slide-caption">Portfolio site for delhi based astro photographer</p>
            </div>
          </div>
        </Carousel>
    </div>
  );
}