import React from "react"
import "./VenueCard.css"

function VenueCard(props){

  return (
    <div id="card-div">
      <img id="cover" src={props.cover} alt="Venue cover"></img>
      <div id="card-text">
        <p id="category">{props.category.toUpperCase()}</p>
        <p id="name">{props.name}</p>
        <p id="description">{props.description}</p>
      </div>
    </div>
  )
}

export default VenueCard
