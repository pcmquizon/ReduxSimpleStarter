import React from 'react';

import ProjectListItem from './projectListItem';

const ProjectList = (props) => {
  const projectItems = props.projects.map((project, index) => {
    return(
      <ProjectListItem key={index} project={project}/>
    );
  });

  return(
    <div className="col-md-3 d-inline-block align-top">
      {projectItems}
    </div>
  );
};

export default ProjectList;
