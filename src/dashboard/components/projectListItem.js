import React, { Component } from 'react';

class ProjectListItem extends Component {

  constructor(props) {
    super(props);
    this.onProjectSelect = this.onProjectSelect.bind(this);
  };

  onProjectSelect() {
    this.props.onProjectSelect(this.props.project);
  };

  render() {
    return(
      <li className='list-group-item' onClick={this.onProjectSelect}>
        {this.props.project.name}
      </li>
    );
  };
};

export default ProjectListItem;
