import { createSelector } from 'reselect';
import { getActiveID } from './ui';

// Все ключи; Стор отображение того, что сохраняется локально в браузере
export const getKeys = (state) => state.weather.keys;

// Вся погода
const getWeather = (state) => state.weather;

// Вернуть данные активного города
export const selectActiveCity = createSelector(getWeather, getActiveID, (weather, id) => {
  return weather[id]
})

// Создать массив с данными по всем ключам городов
export const selectCityList = createSelector(getKeys, getWeather, (keys, weather) => {
  let CityList = new Array;
  if (keys.length > 0) {
    keys.map((key, i) => {
      CityList[i] = weather[key]
    })
  }
  return CityList;
})
