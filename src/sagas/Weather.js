import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import * as action from '../constants/actions';
import config from '../constants/config';

// Получить местную погоду
function* getLocalWeather(request) {
  const { API_URL, API_KEY } = config;
  const { latitude, longitude } = request.payload;
  const requestURL = `${API_URL}?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${API_KEY}`;
  const options = { headers: { 'Content-Type': 'application/json' } };
  try {
    yield put({type: action.REQUEST_SENT});
    const response = yield call(axios.get, requestURL, options);
    if (response.status === 200) {
      const { id, name } = response.data;
      let { temp, pressure, humidity } = response.data.main;
        temp = Math.round(temp);
        pressure = Math.round(pressure);
        humidity = Math.round(humidity);
      yield put({
        type: action.SET_LOCAL_WEATHER,
        payload: { id, name, temp, pressure, humidity }
      });
      yield put({type: action.RESPONSE_SUCCESS});

    } else {
      yield put({type: action.RESPONSE_ERROR, payload: 'SERVER_RESPONDED_WITH_ERROR'});
      yield delay(3000);
      yield put({type: action.RESET_ERROR});
    }
  } catch (e) {
    yield put({type: action.RESPONSE_ERROR, payload: e.response.data.error});
    yield delay(3000);
    yield put({type: action.RESET_ERROR});
  }
}

// Получить погоду по сохраненным городам
function* getWeather(cityList) {
  const { API_URL_GROUP, API_KEY } = config;
  const requestURL = `${API_URL_GROUP}?id=${[...cityList.payload]}&lang=ru&units=metric&appid=${API_KEY}`;
  const options = { headers: { 'Content-Type': 'application/json' } };
  try {
    yield put({type: action.REQUEST_SENT});
    const response = yield call(axios.get, requestURL, options);
    for (let city of response.data.list) {
      let { name, id } = city;
      let { temp, pressure, humidity } = city.main;
        temp = Math.round(temp);
        pressure = Math.round(pressure);
        humidity = Math.round(humidity);
      yield put({
        type: action.SET_STORED_WEATHER,
        payload: { id, name, temp, pressure, humidity }
      });
    }
  } catch (e) {
    yield put({type: action.RESPONSE_ERROR, payload: e.response.data.error});
    yield delay(3000);
    yield put({type: action.RESET_ERROR});
  }
}

export { getLocalWeather, getWeather };
