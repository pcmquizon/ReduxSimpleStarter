import React from 'react';
import ReactDOM from 'react-dom';

import StarterApp from '../starter/starter';
import YoutubeApp from '../youtube/youtube';
import LibraryApp from '../library/library';
import WeatherForecastApp from '../weatherForecast/weatherForecast';
import BloggerApp from '../blogger/blogger';
import App from './components/app';

const Dashboard = (props) => {
  const projects = [
    {
      name: 'ReduxSimpleStarter Boilerplate',
      content: <StarterApp />
    },
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
    {
      name: 'Blogger',
      content: <BloggerApp />
    },

  ];

  return(
    <App projects={projects} />
  );
};

export default Dashboard;
