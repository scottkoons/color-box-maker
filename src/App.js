import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';
import { Save, Delete } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < BoxList />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
