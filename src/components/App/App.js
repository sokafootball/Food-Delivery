import React, { useCallback, useEffect, useState } from 'react'
import './App.css';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {

  const [orderTime, setOrderTime] = useState([])

  const handleFormChange = (e) => {
    const { time } = e.target
    setOrderTime({ time })
  }

  return (
    <div className="App">
      <div id="top-div">
        <Logo />
        <Welcome />
        <Instructions />
        <TimeForm
          handleFormChange={handleFormChange}
        />
      </div>
      <Loader/>
      <SearchResult />
    </div>
  );

}

export default App;
