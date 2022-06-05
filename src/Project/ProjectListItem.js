import './ProjectListItem.scss';
import ProjectStackList from './ProjectStackList/ProjectStackList';
function ProjectListItem({ projectName, projectStack, projectStatus, projectDescription, projectButtons }) {
  return (
    <div className="ProjectListItem">
      {projectName}
      {projectStatus}
      <ProjectStackList dataArray={projectStack}/>
      {projectDescription}
    </div>
  );
}

export default ProjectListItem;
