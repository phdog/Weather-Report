import * as action from '../constants/actions';

const searchCity = (input) => ({
  type: action.SEARCH_CITY,
  payload: input
})

const setActiveCity = (id) => ({
  type: action.SET_ACTIVE_ID,
  payload: id
})

const addCity = (id) => ({
  type: action.ADD_CITY,
  payload: id
})

const removeCity = (id) => ({
  type: action.REMOVE_CITY,
  payload: id
})

export { searchCity, setActiveCity, addCity, removeCity };
