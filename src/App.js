import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProjectList from './Project/ProjectList';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state } = useApplicationData();
  return (
    <div className="App">
      <Header dataArray={state.header}/>
      <ProjectList dataArray={state.projects}/>
      <Footer dataArray={state.footer}/>
    </div>
  );
}

export default App;
