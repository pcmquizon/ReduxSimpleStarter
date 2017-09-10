import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers/index';
import store from './weatherForecastStore';
import App from './components/app';

const WeatherForecast = (props) => {

  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  const storeWithMiddleWare = createStoreWithMiddleware(rootReducer);

  return(
    <Provider store={ storeWithMiddleWare }>
      <App />
    </Provider>
  );
};

export default WeatherForecast;
