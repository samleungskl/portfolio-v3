import './ProjectListItem.scss';
import ProjectStackList from './ProjectStackList/ProjectStackList';
import ProjectButtonList from './ProjectButtonList/ProjectButtonList';
function ProjectListItem({ projectName, projectStack, projectStatus, projectDescription, projectButtons, projectIsFeatured, projectYear }) {
  console.log({ projectIsFeatured })
  return (
    <div className="ProjectListItem">
      {projectIsFeatured === true && <p className='projectIsFeatured'>Featured</p>}
      {projectIsFeatured === undefined && <p className='projectIsFeatured'></p>}
      <div className="ProjectListItemContainer">
        <div className='projectNameAndStatusContainer'>
          <h2 className='projectName'>{projectName}</h2>
        </div>
        <ProjectStackList dataArray={projectStack} />
        <div className='projectDescription'>{projectDescription}</div>
        <ProjectButtonList dataArray={projectButtons} />
        <div className="ProjectYearContainer">
          <h4 className='projectYear'>{projectYear}</h4>
          <h4 className='projectStatus'>{projectStatus}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectListItem;
