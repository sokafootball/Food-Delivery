import React, { useCallback, useEffect, useState } from 'react'
import './App.css';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {

  const [orderTime, setOrderTime] = useState({hours:"00", minutes:"00"})

  const handleTimeFormChange = (e) => {
    const { name, value } = e.target
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
