import React from 'react';
import ReactDOM from 'react-dom';

import StarterApp from '../starter/starter';
import YoutubeApp from '../youtube/youtube';
import LibraryApp from '../library/library';
import WeatherForecastApp from '../weatherForecast/weatherForecast';
import BloggerApp from '../blogger/blogger';

import { APP_ROOT_URL as starterAppUrl } from '../starter/config';
import { APP_ROOT_URL as youtubeAppUrl } from '../youtube/config';
import { APP_ROOT_URL as libraryAppUrl } from '../library/config';
import { APP_ROOT_URL as weatherForecastAppUrl } from '../weatherForecast/config';
import { APP_ROOT_URL as bloggerAppUrl } from '../blogger/config';

import App from './components/app';

const Dashboard = (props) => {
  const projects = [
    {
      name: 'Home',
      content: () => (
        <div>
          <span>Select a project to view from the sidebar.</span>
        </div>
      ),
      url: '/',
      exact: true,
    },
    {
      name: 'ReduxSimpleStarter Boilerplate',
      content: StarterApp,
      url: starterAppUrl,
      exact: true,
    },
    {
      name: 'Youtube API Search',
      content: YoutubeApp,
      url: youtubeAppUrl,
      exact: true,
    },
    {
      name: 'Library',
      content: LibraryApp,
      url: libraryAppUrl,
      exact: true,
    },
    {
      name: 'Weather Forecast',
      content: WeatherForecastApp,
      url: weatherForecastAppUrl,
      exact: true,
    },
    {
      name: 'Blogger',
      content: BloggerApp,
      url: bloggerAppUrl,
      exact: true,
    },

  ];

  return(
    <App projects={projects} />
  );
};

export default Dashboard;
