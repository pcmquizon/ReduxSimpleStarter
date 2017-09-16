import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ProjectList from './projectList';
import ProjectDetail from './projectDetail';

class App extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <BrowserRouter>
        <div className="col-lg-12">
          <ProjectList projects={this.props.projects}/>
          <Switch>
            <ProjectDetail projects={this.props.projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
