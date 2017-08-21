import { createSelector } from 'reselect';
import { getActiveID } from './ui';

export const getKeys = (state) => state.weather.keys;

const getWeather = (state) => state.weather;

/*
export const selectCityById = (state) => {

};
*/

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
