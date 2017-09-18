import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Starter = (props) => {
  return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );
};

import { APP_ROOT_URL as appUrl } from './config';
export const baseUrl = appUrl;

export default Starter;
