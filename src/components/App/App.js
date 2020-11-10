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
  const [availableVenues, setAvailableVenues] = useState([])
  const [noResults, setNoResults] = useState(false)

  const minMinutesOfDelayUser = 20
  const minMinutesOfDelayVenue = 30

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
    const currentTimeInMinutes = currentTime.hours * 60 + currentTime.minutes
    const orderTimeInMinutes = parseInt(orderTime.hours) * 60 + parseInt(orderTime.minutes)
    if ((orderTimeInMinutes - currentTimeInMinutes) < minMinutesOfDelayUser) setNoResults(true)
    else{
      const orderTimeString = `${orderTime.hours}:${orderTime.minutes}`
      const compatibleDeliverySlot = checkForDeliverySlots(orderTimeString)
      console.log(`delivery slot found : ${compatibleDeliverySlot}`)
      if (compatibleDeliverySlot === undefined) setNoResults(true)
      else filterVenues(compatibleDeliverySlot)
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
    console.log(`compatibleVenues found : ${JSON.stringify(compatibleVenues)}`)
    setAvailableVenues(compatibleVenues)
  }


  useEffect(() => {
    setNoResults(false)
    setCurrentTime({hours: new Date().getHours(), minutes: new Date().getMinutes()})
    // console.log(venues)
    // console.log(deliverySlots)
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
