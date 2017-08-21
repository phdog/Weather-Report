import Immutable from 'seamless-immutable';
import mergers from 'seamless-immutable-mergers';
import {
  SET_LOCAL_WEATHER,
  SET_STORED_WEATHER,
  SET_WEATHER,
  UPDATE_LIST
} from '../constants/actions';

const INITIAL_STATE = Immutable({ local: {}, keys: [] });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_LOCAL_WEATHER: {
      //const { id, name, temp, pressure, humidity } = action.payload;
      return Immutable.merge(state,
        {local: action.payload},
        {deep: true});
    }
    case SET_STORED_WEATHER: {
      const { id, name, temp, pressure, humidity } = action.payload;
      return Immutable.merge(state,
        {[id]: { id, name, temp, pressure, humidity }, keys: [id]},
        {merger: mergers.concatArrayMerger, deep: true});
    }
    case UPDATE_LIST: {
      return Immutable.merge(state,
        {keys: [action.payload]},
        {merger: mergers.concatArrayMerger, deep: true});
    }
    case SET_WEATHER: {
      const { id, name, temp, pressure, humidity } = action.payload;
      return Immutable.merge(state,
        {[id]: { id, name, temp, pressure, humidity }},
        {deep: true});
    }
  }
  return state;
}
