import './App.scss';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state } = useApplicationData();
  console.log('state', state)
  return (
    <div className="App">
    </div>
  );
}

export default App;
