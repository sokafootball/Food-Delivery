import React from "react"
import "./TimeForm.css"

function TimeForm(){
  return (
    <div id="time-form-div">
      <input id="time-form-hours" type="number" min="00" max="23"></input>
      <input id="time-form-minutes" type="number" min="00" max="59"></input>
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
