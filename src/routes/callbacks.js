import { store } from '../redux';
import * as action from '../constants/actions';

const getGeoLocation = () => {
  if ('geolocation' in navigator) {
    store.dispatch({ type: action.REQUEST_SENT });
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        store.dispatch({
          type: action.SET_COORDS,
          payload: { latitude, longitude }
        });
      })
  } else {
    throw new Error('GEOLOCATION_NOT_AVAILABLE_IN_BROWSER')
  }
}

export { getGeoLocation };
