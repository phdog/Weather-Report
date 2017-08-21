import { createSelector } from 'reselect';
import { getActiveID } from './ui';

export const getKeys = (state) => state.weather.keys;

const getWeather = (state) => state.weather;

export const selectCityById = (state) => {

};

export const selectActiveCity = createSelector(getWeather, getActiveID, (weather, id) => {
  return weather[id]
})
