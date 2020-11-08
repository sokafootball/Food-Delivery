import './App.css';
import Instructions from './Instructions/Instructions';
import Loader from './Loader/Loader';
import Logo from './Logo/Logo';
import SearchResult from './SearchResult/SearchResult';
import TimeForm from './TimeForm/TimeForm';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
