import React, { useEffect, useState } from 'react'
import './App.css';
import Instructions from '../Instructions/Instructions';
import Logo from '../Logo/Logo';
import SearchResult from '../SearchResult/SearchResult';
import TimeForm from '../TimeForm/TimeForm';
import Welcome from '../Welcome/Welcome';

function App() {

  const [orderTime, setOrderTime] = useState({hours:"", minutes:""})
  const [currentTime, setCurrentTime] = useState({hours: new Date().getHours(), minutes: new Date().getMinutes()})
  const [deliverySlots, setDeliverySlots] = useState([])
  const [venues, setVenues] = useState([])
  const [availableVenues, setAvailableVenues] = useState([])
  const [loadingStatus, setLoadingStatus] = useState("")

  const minMinutesOfDelayUser = 20
  const loadingStates = {
    loading: "loading",
    loaded: "loaded",
    error: "error"
  }

  const handleTimeFormChange = e => {
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
    const currentTimeInMinutes = currentTime.hours * 60 + currentTime.minutes
    const orderTimeInMinutes = parseInt(orderTime.hours) * 60 + parseInt(orderTime.minutes)
    if ((orderTimeInMinutes - currentTimeInMinutes) < minMinutesOfDelayUser) setLoadingStatus(loadingStates.error)
    else{
      const orderTimeString = `${orderTime.hours}:${orderTime.minutes}`
      const compatibleDeliverySlot = checkForDeliverySlots(orderTimeString)
      if (compatibleDeliverySlot !== undefined) filterVenues(compatibleDeliverySlot)
      else setLoadingStatus(loadingStates.error)
    }
  }

  const checkForDeliverySlots = orderTimeString => {
    const formattedDeliverySlots = deliverySlots.map(slot => slot.split("-"))
    return formattedDeliverySlots.find(slot => {
      return (orderTimeString >= slot[0] && orderTimeString <= slot[1])
    })
  }

  const filterVenues = compatibleDeliverySlot => {
    const compatibleVenues = venues.filter(venue => {
      return venue.freeSlots.some(slot => {
        return slot.split("-")[1] === compatibleDeliverySlot[0]
      })
    })
    compatibleVenues.length !== 0 ? setLoadingStatus(loadingStates.loaded) : setLoadingStatus(loadingStates.error)
    setAvailableVenues(compatibleVenues)
  }

  useEffect(() => {
    console.log("orderTime has changed")
    setAvailableVenues([])
    setLoadingStatus(loadingStates.loading)
    setTimeout(() => {
      setCurrentTime({hours: new Date().getHours(), minutes: new Date().getMinutes()})
      searchForVenues()
    }, 2000);
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
      <SearchResult
        orderTime={orderTime}
        currentTime={currentTime}
        availableVenues={availableVenues}
        loadingStatus={loadingStatus}
        loadingStates={loadingStates}
      />
    </div>
  );

}

export default App;
