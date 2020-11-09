import React, { useCallback, useEffect, useState } from 'react'
import './App.css';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {

  const [orderTime, setOrderTime] = useState({hours:"", minutes:""})

  const handleTimeFormChange = (e) => {
    let { name, value } = e.target
    value = name === "hours" ? Math.min(value,23) : Math.min(value,59)
    value = Math.max(value,0)
    value = value === "00" ? "00" : value
    setOrderTime({ ...orderTime,[name]:value })
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
          orderTime={orderTime}
        />
      </div>
      <Loader/>
      <SearchResult />
    </div>
  );

}

export default App;
