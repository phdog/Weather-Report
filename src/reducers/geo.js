import Immutable from 'seamless-immutable';
import {
  SET_COORDS
} from '../constants/actions';

const INITIAL_STATE = Immutable({ coords: {} });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_COORDS:
      return Immutable.set(state, 'coords', action.payload);
  }
  return state;
}
