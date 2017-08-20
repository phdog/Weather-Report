import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import geoReducer from './geo';
import weatherReducer from './weather';
import uiReducer from './ui';

const rootReducer = combineReducers({
  routing: routerReducer,
  geo: geoReducer,
  weather: weatherReducer,
  ui: uiReducer
});

export default rootReducer;
