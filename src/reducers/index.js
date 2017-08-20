import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import geoReducer from './geo';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  routing: routerReducer,
  geo: geoReducer,
  weather: weatherReducer
});

export default rootReducer;
