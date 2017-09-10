import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchBar';
import WeatherList from './weatherList';

const App = (props) => {
  return(
    <div>
      <SearchBar placeholder='Get a 5-day wether forecast from any city in the Philippines'/>
      <WeatherList/>
    </div>
  );
};

export default App;
