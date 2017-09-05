import React, { Component } from 'react';

import ProjectList from './projectList';
import ProjectDetail from './projectDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.onProjectSelect = this.onProjectSelect.bind(this);
  };

  getInitialState() {
    return {
      selectedProject: null,
    };
  };

  onProjectSelect(project) {
    this.setState({'selectedProject' : project});
  };

  render() {
    return(
      <div>
        <ProjectList projects={this.props.projects} onProjectSelect={this.onProjectSelect} />
        <ProjectDetail detail={this.state.selectedProject} />
      </div>
    );
  };
};

export default App;
