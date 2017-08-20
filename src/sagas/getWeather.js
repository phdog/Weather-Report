import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as action from '../constants/actions';
import config from '../constants/config';

export default function* getWeather(request) {
  const { API_URL, API_KEY } = config;
  // single object
  const { latitude, longitude } = request.payload;
  const requestURL = `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  console.log(request);
  const options = { headers: { 'Content-Type': 'application/json' } };
  try {
    const response = yield call(axios.get, requestURL, options);
    console.log(response.data);
    const { temp, pressure, humidity } = response.data.main;
    const { id, name } = response.data;
    yield put({
      type: action.SET_LOCAL_WEATHER,
      payload: { id, name, temp, pressure, humidity }
    });
  } catch (e) {
    console.log(e.response.data.error);
  }
}
