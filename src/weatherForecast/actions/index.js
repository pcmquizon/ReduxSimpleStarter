import axios from 'axios';

import { WEATHER_API_ROOT_URL } from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${WEATHER_API_ROOT_URL}&q=${city},ph`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
