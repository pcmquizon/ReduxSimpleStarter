import React from 'react';
import ReactDOM from 'react-dom';

import YoutubeApp from '../youtube/youtube';
import TinderApp from '../tinder/tinder';
import App from './components/app';

const Dashboard = (props) => {
  const projects = [
    {
      name: 'Youtube API Search',
      content: <YoutubeApp />
    },
    {
      name: 'TinderReactRedux',
      content: <TinderApp />
    },

  ];

  return(
    <App projects={projects} />
  );
};

export default Dashboard;
