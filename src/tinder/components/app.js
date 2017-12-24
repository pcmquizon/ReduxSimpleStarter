import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { APP_ROOT_URL } from '../config'
import Splash from './splash';
import MatchMaking from './matchMaking';
import MessageList from './messageList'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path={`${APP_ROOT_URL}/messages`} component={MessageList} />
            <Route path={`${APP_ROOT_URL}/match`} component={MatchMaking} />
            <Route path={`${APP_ROOT_URL}/`} component={Splash} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
