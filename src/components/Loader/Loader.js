import React from "react"
import "./Loader.css"
import pizzaImg from "../../pizza.png"

function Loader(){
  return (
    <div id="loader-div">
      <img id="loader-img" alt="pizza" src={pizzaImg}></img>
      <p id="loader-msg">Stiamo caricando i ristoranti per te...</p>
    </div>
  )
}

export default Loader
