import Immutable from 'seamless-immutable';
import mergers from 'seamless-immutable-mergers';
import {
  SET_LOCAL_WEATHER,
  SET_WEATHER
} from '../constants/actions';

const INITIAL_STATE = Immutable({ local: {}, keys: [] });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_LOCAL_WEATHER: {
      const { id, name, temp, pressure, humidity } = action.payload;
      return Immutable.merge(state,
        {local: action.payload, [id]: { name, temp, pressure, humidity }, keys: [id]},
        {merger: mergers.concatArrayMerger, deep: true});
    }
    case SET_WEATHER: {
      const { id, name, temp, pressure, humidity } = action.payload;
      return Immutable.merge(state,
        {[id]: { name, temp, pressure, humidity }, keys: [id]},
        {merger: mergers.concatArrayMerger, deep: true});
    }
  }
  return state;
}
