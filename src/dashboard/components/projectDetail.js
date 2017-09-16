import React from 'react';
import { Route } from 'react-router-dom';

const ProjectDetail = (props) => {
  return(
    <div className="project-detail col-md-9 d-inline-block align-top">
      {props.projects.map((item, index) => {
        return(
          <Route path={`${item.url}`} component={item.content} key={item.name} exact={item.exact}/>
        );
      })}
    </div>
  );
};

export default ProjectDetail;
