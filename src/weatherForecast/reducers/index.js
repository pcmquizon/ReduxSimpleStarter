import { combineReducers } from 'redux';

import { FETCH_WEATHER } from '../actions/index';

import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
