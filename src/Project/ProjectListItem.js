import './ProjectListItem.scss';
import ProjectStackList from './ProjectStackList/ProjectStackList';
import ProjectButtonList from './ProjectButtonList/ProjectButtonList';
function ProjectListItem({ projectName, projectStack, projectStatus, projectDescription, projectButtons, projectIsFeatured }) {
  console.log({ projectIsFeatured })
  return (
    <div className="ProjectListItem">
      {projectIsFeatured === true && <p className='projectIsFeatured'>Featured</p>}
      <div className="ProjectListItemContainer">
        <div className='projectNameAndStatusContainer'>
          <h2 className='projectName'>{projectName}</h2>
          <h3 className='projectStatus'>{projectStatus}</h3>
        </div>
        <ProjectStackList dataArray={projectStack} />
        <div className='projectDescription'>{projectDescription}</div>
        <ProjectButtonList dataArray={projectButtons} />
      </div>
    </div>
  );
}

export default ProjectListItem;
