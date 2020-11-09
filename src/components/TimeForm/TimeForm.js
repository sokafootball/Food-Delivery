import React from "react"
import "./TimeForm.css"

function TimeForm(props){
  return (
    <div id="time-form-div">
      <div id="time-form-input-div">
        <input
          id="time-form-hours"
          className="time-form-input"
          type="number"
          name="hours"
          min="00"
          max="23"
          onChange={(e) => props.handleTimeFormChange(e)}
          value={props.orderTime.hours}
        ></input>
        <span>:</span>
        <input
          id="time-form-hours"
          className="time-form-input"
          type="number"
          name="minutes"
          min="00"
          max="59"
          onChange={(e) => props.handleTimeFormChange(e)}
          value={props.orderTime.minutes}
        ></input>
      </div>
    </div>
  )
}

//fare un text input che deve avere il formato HH:MM
  //è un component fatto di input-numero string(:) input-numero
  //HH deve andare da 00 a 23
  //MM deve andare da 00 a 60
//ad avvio applicazione salvare in state la data attuale ed estrarre in una variabile il numero
 //di minuti passati dall'inizio del giorno moltiplicando getHour per il numero corretto di minuti
//quando utente modifica input salvare nello state il numero di minuti passati dall'inizio del giorno
  //
//EXTRA: ricontrollare ora locale ogni volta che modifica

export default TimeForm
