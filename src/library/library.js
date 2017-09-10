import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './libraryStore';
import App from './components/app';

const Library = (props) => {
  return(
    <Provider store={ store }>
      <App />
    </Provider>
  );
};

export default Library;
