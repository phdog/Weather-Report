export const SET_COORDS = 'set_coords'; //Push current geo coordinates to Store
export const GET_WEATHER = 'get_weather'; //Go fetch weather data from API
export const SET_WEATHER = 'set_weather'; //Push weather object to Store
export const SET_STORED_WEATHER = 'set_stored_weather'; //Push weather object to Store and index with Keys
export const SET_LOCAL_WEATHER = 'set_local_weather'; //Push local weather object to Store

export const SEARCH_CITY = 'search_city'; //Search new city and add to Main View
export const ADD_CITY = 'add_city'; //Add new city to localStorage
export const REMOVE_CITY = 'remove_city'; //Remove city from localStorage
export const UPDATE_LIST = 'update_list'; //Update Key values with new cityList

export const SET_ACTIVE_ID = 'set_active_id'; //sets active city to display on main screen
export const REQUEST_SENT = 'request_sent'; //sent a request to API server
export const RESPONSE_SUCCESS = 'response_success'; //server responded successfully
export const RESPONSE_ERROR = 'response_error'; //server responded with an error
export const RESET_ERROR = 'reset_error'; //reset error message
