import { combineReducers } from 'redux';

import MenuReducer from './Menu';

const allReducers = combineReducers({
  menu: MenuReducer
});

export default allReducers;
