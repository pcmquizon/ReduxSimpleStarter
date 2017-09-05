import React from 'react';

const ProjectDetail = ({detail}) => {
  return(
    <div className="col-md-8 project-detail">
      {detail ? detail.content : 'Select a project to view'}
    </div>
  );
};

export default ProjectDetail;
