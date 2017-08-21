import { store } from '../redux';
import * as action from '../constants/actions';
import config from '../constants/config';

const windUp = () => {
  let stored = localStorage.getItem(config.CITIES);
  let record = JSON.parse(stored)
// If Stored Cities exist, fetch data from API
  if (stored) {
    store.dispatch({
      type: action.GET_WEATHER,
      payload: record
    })
  }

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

export { windUp };
