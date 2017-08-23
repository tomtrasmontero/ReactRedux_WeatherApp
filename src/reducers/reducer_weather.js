import { FETCH_WEATHER } from '../actions/index';

// reducer are just function, imported in index.js as WeatherReducer
export default function (state = [], action) {
  // set up switch statement to call action.type(ex. FETCH_WEATHER)
  switch (action.type) {
    case FETCH_WEATHER:
    // we need to add new data to the existing state and RETURN a new array with
    // the added data.  This is why we use concat
      // ES6 syntax
      // return [...state, action.payload.data];
      return state.concat([action.payload.data]);
  }
  return state;
}
