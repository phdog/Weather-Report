import * as action from '../constants/actions';

const searchCity = (input) => ({
  type: action.SEARCH_CITY,
  payload: input
})

export { searchCity };
