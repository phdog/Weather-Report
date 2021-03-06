import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import * as action from '../constants/actions';
import config from '../constants/config';
import { getKeys } from '../selectors';

// Вывод погоды по городу. Если вводится ернуда, сервис выводит полижительный непустой результат
function* searchCity(obj) {
  const { API_URL, API_KEY } = config;
  const name = obj.payload;
  const requestURL = `${API_URL}?q=${name}&lang=ru&units=metric&appid=${API_KEY}`;
  const options = { headers: { 'Content-Type': 'application/json' } };
  try {
    yield put({type: action.REQUEST_SENT});
    const response = yield call(axios.get, requestURL, options);
    if (response.status === 200) {
      const { id, name } = response.data;
      let { temp, pressure, humidity } = response.data.main
      temp = Math.round(temp);
      pressure = Math.round(pressure);
      humidity = Math.round(humidity);

    yield put({
      type: action.SET_WEATHER,
      payload: { id, name, temp, pressure, humidity }
    });

    yield put({
      type: action.SET_ACTIVE_ID,
      payload: id
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

// Добавить город в локальное хранилище и отобразить в списке
function* addCity(obj) {
  const { CITIES } = config;
  const id = obj.payload;
  try {
    let stored = localStorage.getItem(CITIES);
    if (!stored) {
      let record = new Array;
      record.push(id);
      record = JSON.stringify(record);
      localStorage.setItem(CITIES, record);
    } else {
      // Проверка на дубли
      const keys = yield select(getKeys);
        if (!keys.includes(id)) {
          let record = JSON.parse(stored)
          record.push(id);
          record = JSON.stringify(record);
          localStorage.setItem(CITIES, record);
          yield put({
            type: action.UPDATE_LIST,
            payload: id
          });
        }
      }

    } catch (e) {
      console.log(e)
    }
}

// Удалить город из локального хранилища
function* removeCity(obj) {
  const { CITIES } = config;
  const id = obj.payload;

  try {
    let stored = localStorage.getItem(CITIES);
    stored = JSON.parse(stored);
    let index = stored.indexOf(id);
    // если такой элемент существует
    if (index > -1) {
      let newKeys = stored.slice(0, index).concat(stored.slice(index+1))
      let str = JSON.stringify(newKeys);
      localStorage.setItem(CITIES, str);
    // Изменить Стор
      yield put({
        type: action.REPLACE_LIST,
        payload: newKeys
      });
    }

  } catch (e) {
    console.log(e)
  }
}

export { searchCity, addCity, removeCity };
