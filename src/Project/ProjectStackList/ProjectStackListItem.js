import React from 'react';
import './ProjectStackListItem.scss';

function ProjectStackListItem({stackName}) {
  return (
    <div className="ProjectStackListItem">
      {stackName}
    </div>
  );
};

export default ProjectStackListItem;
