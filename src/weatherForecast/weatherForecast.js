import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './weatherForecastStore';
import App from './components/app';

const WeatherForecast = (props) => {
  return(
    <Provider store={ store }>
      <App />
    </Provider>
  );
};

export default WeatherForecast;
