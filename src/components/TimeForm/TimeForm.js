import React from "react"
import "./TimeForm.css"
import clockIcon from "./clock-icon.png"

function TimeForm(props){
  return (
    <div id="time-form-div">
      <div id="time-form-input-div">
        <input
          id="time-form-hours"
          className="time-form-input"
          type="text"
          name="hours"
          placeholder="19"
          onChange={(e) => props.handleTimeFormChange(e)}
          value={props.orderTime.hours}
        ></input>
        <span>:</span>
        <input
          id="time-form-minutes"
          className="time-form-input"
          type="text"
          name="minutes"
          placeholder="30"
          onChange={(e) => props.handleTimeFormChange(e)}
          value={props.orderTime.minutes}
        ></input>
      </div>
      <img id="clock-icon" alt="" src={clockIcon}></img>
    </div>
  )
}

export default TimeForm
