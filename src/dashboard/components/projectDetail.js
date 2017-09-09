import React from 'react';

const ProjectDetail = ({detail}) => {
  return(
    <div className="col-sm-9 project-detail">
      {detail ? detail.content : 'Select a project to view'}
    </div>
  );
};

export default ProjectDetail;
