import { takeEvery } from 'redux-saga';
import * as action from '../constants/actions';
import getWeather from './getWeather';

function* watchGetWeather() {
  yield* takeEvery(action.SET_COORDS, getWeather);
}

function* watchSetCoords() {
  yield* takeEvery(action.GET_WEATHER, getWeather);
}

export default function* rootSaga() {
  yield [
    watchSetCoords(),
    watchGetWeather()
  ]
}
