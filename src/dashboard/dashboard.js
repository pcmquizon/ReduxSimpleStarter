import React from 'react';
import ReactDOM from 'react-dom';

import YoutubeApp from '../youtube/youtube';
import LibraryApp from '../library/library';
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

  ];

  return(
    <App projects={projects} />
  );
};

export default Dashboard;
