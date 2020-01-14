import {combineReducers} from 'redux';

import AppContainer from '../config/routes';

import ui from './ui';
import medicine from './medicine';
import store from './store';

const navReducer = (state, action) => {
  const newState = AppContainer.router.getStateForAction(action, state);
  return newState || state;
};

const AppReducer = combineReducers({
  nav: navReducer,
  ui,
  medicine,
  store,
});

export default AppReducer;
