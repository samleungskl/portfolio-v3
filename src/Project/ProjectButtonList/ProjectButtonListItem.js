import React from 'react';
import './ProjectButtonListItem.scss';

function ProjectButtonListItem({btnName, btnHref}) {
  return (
    <div className="ProjectButtonListItem">
      <a href={btnHref}>{btnName}</a>
    </div>
  );
}

export default ProjectButtonListItem;
