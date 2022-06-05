import './ProjectListItem.scss';
import ProjectStackList from './ProjectStackList/ProjectStackList';
import ProjectButtonList from './ProjectButtonList/ProjectButtonList';
function ProjectListItem({ projectName, projectStack, projectStatus, projectDescription, projectButtons }) {
  return (
    <div className="ProjectListItem">
      {projectName}
      {projectStatus}
      <ProjectStackList dataArray={projectStack}/>
      {projectDescription}
      <ProjectButtonList dataArray={projectButtons}/>
    </div>
  );
}

export default ProjectListItem;
