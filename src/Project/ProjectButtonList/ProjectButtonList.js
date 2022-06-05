import './ProjectButtonList.scss';
import ProjectButtonListItem from './ProjectButtonListItem';

function ProjectButtonList({dataArray}) {
  const result = dataArray.map((element)=>{
    return <ProjectButtonListItem btnName={element.btnName} btnHref={element.btnHref} key={element.btnUid}/>
  })
  return (
    <div className="ProjectButtonList">
      {result}
    </div>
  );
}

export default ProjectButtonList;
