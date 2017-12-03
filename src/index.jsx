import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
  , document.getElementById('app'));