import { takeEvery } from 'redux-saga';
import * as action from '../constants/actions';
import { getWeather, getLocalWeather } from './Weather';
import { searchCity } from './City';

function* watchGetWeather() {
  yield* takeEvery(action.SET_COORDS, getLocalWeather);
}

function* watchSetCoords() {
  yield* takeEvery(action.GET_WEATHER, getWeather);
}

function* watchSearchCity() {
  yield* takeEvery(action.SEARCH_CITY, searchCity);
}

export default function* rootSaga() {
  yield [
    watchSetCoords(),
    watchGetWeather(),
    watchSearchCity()
  ]
}
