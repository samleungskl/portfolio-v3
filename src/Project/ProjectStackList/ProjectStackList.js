import './ProjectStackList.scss';
import ProjectStackListItem from './ProjectStackListItem';
function ProjectStackList({dataArray}) {
  const result = dataArray.map((element, index)=>{
    return <ProjectStackListItem stackName={element} key={index}/>
  })
  return (
    <div className="ProjectStackList">
      {result}
    </div>
  );
}

export default ProjectStackList;
