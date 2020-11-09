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
  const [currentTime, setCurrentTime] = useState({hours: new Date().getHours(), minutes: new Date().getMinutes()})
  const [deliverySlots, setDeliverySlots] = useState([])
  const [venues, setVenues] = useState([])

  const handleTimeFormChange = (e) => {
    let { name, value } = e.target
    value = cleanInput(value , name)
    setOrderTime({ ...orderTime,[name]:value })
  }

  const cleanInput = (input, type) => {
    input = input.replace(/[^0-9]/g,"")
    input = input.length > 2 ? input.slice(0,2) : input
    if (type === "hours") {
      input = input > 23 ? "23" : input
    }
    else if (type === "minutes") {
      input = input > 59 ? "59" : input
    }
    input = input < 0 ? "0" : input
    return input
  }

  const getData = async () => {
    let deliverySlots = await fetch("http://localhost:3004/available_delivery_slots").then(data => data.json())
    let availableVenues = await fetch("http://localhost:3004/available_venues").then(data => data.json())
    setDeliverySlots(deliverySlots)
    setVenues(availableVenues)
  }

  const searchForVenues = () => {

  }

  useEffect(() => {
    setCurrentTime({hours: new Date().getHours(), minutes: new Date().getMinutes()})
    console.log(venues)
    console.log(deliverySlots)
    searchForVenues()
  },[orderTime])

  useEffect(() => {
    getData()
  }, [])


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
      <SearchResult
        orderTime={orderTime}
        currentTime={currentTime}
      />
    </div>
  );

}

export default App;
