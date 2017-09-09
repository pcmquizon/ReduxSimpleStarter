import React from 'react';
import ProjectListItem from './projectListItem';

const ProjectList = (props) => {
  const projectItems = props.projects.map((project, index) => {
    return(
      <ProjectListItem key={index} project={project} onProjectSelect={props.onProjectSelect}/>
    );
  });

  return(
    <ul className="col-sm-3 list-group">
      {projectItems}
    </ul>
  );
};

export default ProjectList;
