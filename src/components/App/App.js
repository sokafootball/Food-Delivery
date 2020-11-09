import React, { useCallback, useEffect, useState } from 'react'
import './App.css';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {

  const [orderTime, setOrderTime] = useState("00")

  const handleTimeFormChange = (e) => {
    const { value } = e.target
    setOrderTime({ value })
  }

  useEffect(() => {
    console.log(orderTime)
  },[orderTime])

  return (
    <div className="App">
      <div id="top-div">
        <Logo />
        <Welcome />
        <Instructions />
        <TimeForm
          handleTimeFormChange={handleTimeFormChange}
          time={orderTime}
        />
      </div>
      <Loader/>
      <SearchResult />
    </div>
  );

}

export default App;
