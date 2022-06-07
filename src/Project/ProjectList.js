import './ProjectList.scss';
import ProjectListItem from './ProjectListItem';

function ProjectList({dataArray}) {
    const result = dataArray.map((element)=>{
      return <ProjectListItem projectName={element.projectName} projectStack={element.projectStack} projectIsFeatured={element.projectIsFeatured} projectStatus={element.projectStatus} projectDescription={element.projectDescription} projectImage={element.projectImage} key={element.projectUid} projectButtons={element.projectButtons}/>
    })
  return (
    <div className="ProjectList">
        {result}
    </div>
  );
}

export default ProjectList;
