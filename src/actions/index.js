import axios from 'axios';

const API_KEY = 'eccb8a00960b7856bc31ea7e350259e8';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

// create a variable to hold action type and seperate it from the action creator
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator must return an object and must always have a type
export function fetchWeather(city) {
  // "city, country code" , below we default it to US
  // openweathermap api to get info about weather
  const url = `${ROOT_URL}q=${city},US&APPID=${API_KEY}`;
  // call the url and returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
