import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectListItem extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <Link to={`${this.props.project.url}`} className='list-group-item'>
        {this.props.project.name}
      </Link>
    );
  };
};

export default ProjectListItem;
