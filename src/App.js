import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProjectList from './Project/ProjectList';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state } = useApplicationData();
  const isloaded = state.loaded
  return (
    <div className="App">
      {isloaded === false && <div className='loadingScreen'>Loading...</div>}
      {isloaded === true && <Header dataArray={state.header}/>}
      {isloaded === true && <ProjectList dataArray={state.projects}/>}
      {isloaded === true && <Footer dataArray={state.footer}/>}
    </div>
  );
}

export default App;
