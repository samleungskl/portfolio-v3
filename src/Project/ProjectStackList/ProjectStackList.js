import './ProjectStackList.scss';
import ProjectStackListItem from './ProjectStackListItem';
function ProjectStackList({dataArray}) {
  const result = dataArray.map((element)=>{
    return <ProjectStackListItem stackName={element}/>
  })
  return (
    <div className="ProjectStackList">
      {result}
    </div>
  );
}

export default ProjectStackList;
