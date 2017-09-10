import React from 'react';
import ReactDOM from 'react-dom';

import YoutubeApp from '../youtube/youtube';
import LibraryApp from '../library/library';
import WeatherForecastApp from '../weatherForecast/weatherForecast';
import App from './components/app';

const Dashboard = (props) => {
  const projects = [
    {
      name: 'Youtube API Search',
      content: <YoutubeApp />
    },
    {
      name: 'Library',
      content: <LibraryApp />
    },
    {
      name: 'Weather Forecast',
      content: <WeatherForecastApp />
    },

  ];

  return(
    <App projects={projects} />
  );
};

export default Dashboard;
