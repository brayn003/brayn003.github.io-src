import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { HashRouter } from 'react-router-dom'

import Layout from './components/Layout';
import allReducers from './reducers';

import './index.scss';
import './fonts/ailerons/ailerons-typeface-webfont.ttf';
import './fonts/ailerons/ailerons-typeface-webfont.woff';
import './fonts/ailerons/ailerons-typeface-webfont.woff2';
import './fonts/marck-script/marckscript-regular-webfont.ttf';
import './fonts/marck-script/marckscript-regular-webfont.woff';
import './fonts/marck-script/marckscript-regular-webfont.woff2';
import './fonts/dosis/dosis-regular-webfont.ttf';
import './fonts/dosis/dosis-regular-webfont.woff';
import './fonts/dosis/dosis-regular-webfont.woff2';


const store = createStore(allReducers);

ReactGA.initialize('UA-110790543-1', { debug: true });


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Layout />
    </HashRouter>
  </Provider>
  , document.getElementById('app'));