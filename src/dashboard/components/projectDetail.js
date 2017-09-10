import React from 'react';

const ProjectDetail = ({detail}) => {
  return(
    <div className="project-detail col-md-9 d-inline-block align-top">
      {detail ? detail.content : 'Select a project to view'}
    </div>
  );
};

export default ProjectDetail;
