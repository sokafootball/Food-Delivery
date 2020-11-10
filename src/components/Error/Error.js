import React from "react"
import "./Error.css"
import pizzaImg from "../../pizza.png"

function Error(){
  return (
    <div id="error-div">
      <img id="error-img" alt="pizza" src={pizzaImg}></img>
      <p id="error-msg">Non ci sono consegne disponibili per l'orario che hai selezionato. Ci dispiace, riprova con un altro orario.</p>
    </div>
  )
}

export default Error
