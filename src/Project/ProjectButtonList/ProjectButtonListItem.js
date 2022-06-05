import './ProjectButtonListItem.scss';

function ProjectButtonListItem({btnName, btnHref}) {
  console.log('btnName =>', btnName)
  return (
    <div className="ProjectButtonListItem">
      {btnName}
    </div>
  );
}

export default ProjectButtonListItem;
