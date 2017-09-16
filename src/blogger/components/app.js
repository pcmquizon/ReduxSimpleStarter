import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './postsIndex';
import PostsShow from './postsShow';
import PostsNew from './postsNew';
import { APP_ROOT_URL } from '../config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={`${APP_ROOT_URL}/posts/new`} component={PostsNew} />
          <Route path={`${APP_ROOT_URL}/posts/:id`} component={PostsShow} />
          <Route path={`${APP_ROOT_URL}/`} component={PostsIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
