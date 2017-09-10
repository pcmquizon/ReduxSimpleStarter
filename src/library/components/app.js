import React from 'react';
import ReactDOM from 'react-dom';

import BookList from './bookList';
import BookDetail from './bookDetail';

const App = (props) => {
  return(
    <div>
      <BookList/>
      <BookDetail/>
    </div>
  );
};

export default App;
