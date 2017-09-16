import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './postsIndex';
import PostsShow from './postsShow';
import PostsNew from './postsNew';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
