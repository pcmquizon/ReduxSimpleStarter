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

export default Starter;
