import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state } = useApplicationData();
  console.log('state', state)
  return (
    <div className="App">
      <Header dataArray={state.header}/>
      <Footer dataArray={state.footer}/>
    </div>
  );
}

export default App;
