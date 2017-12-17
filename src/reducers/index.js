import { combineReducers } from 'redux';

import MenuReducer from './Menu';
import ProjectReducer from './Project';

const allReducers = combineReducers({
  menu: MenuReducer,
  project: ProjectReducer
});

export default allReducers;
