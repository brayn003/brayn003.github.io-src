import React, { Component } from 'react';
import Slider from 'react-slick';

import './style.scss';
import imgEd from '../../images/project-ed.png'
import imgAlphajuice from '../../images/project-alphajuice.png'
import imgAt from '../../images/project-ajay.png'

export default function Projects(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  return(
    <div className="view-projects">
      <Slider {...settings}>
        <div>
            <div className="img-container" style={{ backgroundImage: 'url("'+ imgEd +'")' }} />
            <p>English Duniya</p>
        </div>
        <div>
            <div className="img-container" style={{ backgroundImage: 'url("'+ imgAlphajuice +'")', width: '50%' }} />
            <p>Alpha Juice</p>
        </div>
        <div>
            <div className="img-container" style={{ backgroundImage: 'url("'+ imgAt +'")' }} />
            <p>Ajay Talwar Photography</p>
        </div>
      </Slider>
    </div>
  );
}