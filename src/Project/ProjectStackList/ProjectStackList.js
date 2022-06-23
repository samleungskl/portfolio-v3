import React from 'react';
import './ProjectStackList.scss';
import ProjectStackListItem from './ProjectStackListItem';
function ProjectStackList({ dataArray }) {
  // the following if statement is to fix undefined error whenever a record doesn't have any stacks yet
  let result = [];
  if (dataArray !== undefined) {
    result = dataArray.map((element, index) => {
      return <ProjectStackListItem stackName={element} key={index} />
    })
  }
  return (
    <div className="ProjectStackList">
      {result}
    </div>
  );
}

export default ProjectStackList;
