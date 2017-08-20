import { takeEvery } from 'redux-saga';
import * as action from '../constants/actions';
import { getWeather, getLocalWeather } from './Weather';
import { searchCity, addCity } from './City';

function* watchGetWeather() {
  yield* takeEvery(action.SET_COORDS, getLocalWeather);
}

function* watchSetCoords() {
  yield* takeEvery(action.GET_WEATHER, getWeather);
}

function* watchSearchCity() {
  yield* takeEvery(action.SEARCH_CITY, searchCity);
}

function* watchAddCity() {
  yield* takeEvery(action.ADD_CITY, addCity);
}

export default function* rootSaga() {
  yield [
    watchSetCoords(),
    watchGetWeather(),
    watchSearchCity(),
    watchAddCity()
  ]
}
