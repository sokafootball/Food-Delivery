import './App.css';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Logo />
      <Welcome />
      <Instructions />
      <TimeForm/>
      <Loader/>
      <SearchResult />
    </div>
  );
}

export default App;
