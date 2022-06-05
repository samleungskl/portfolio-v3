import './ProjectListItem.scss';

function ProjectListItem({projectName, projectStack, projectStatus, projectDescription, projectButtons}) {
    console.log(projectButtons)
  return (
    <div className="ProjectListItem">
        {projectName}
        {projectStatus}
        {projectStack}
        {projectDescription}
    </div>
  );
}

export default ProjectListItem;
