import Immutable from 'seamless-immutable';
import {
  REQUEST_SENT,
  RESPONSE_SUCCESS,
  RESPONSE_ERROR,
  RESET_ERROR,
  SET_ACTIVE_ID
} from '../constants/actions';

const INITIAL_STATE = Immutable({ loading: false, error: '', active: 'local' });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_SENT:
      return Immutable.set(state, 'loading', true);
    case RESPONSE_SUCCESS:
      return Immutable.set(state, 'loading', false);
    case RESPONSE_ERROR:
      return Immutable.merge(state, {loading: false, error: action.payload}, {deep: true} );
    case RESET_ERROR:
      return Immutable.set(state, 'error', '');
    case SET_ACTIVE_ID:
      return Immutable.set(state, 'active', action.payload);
  }
  return state;
}
