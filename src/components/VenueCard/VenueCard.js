import React from "react"
import "./VenueCard.css"

function VenueCard(props){
  return (
    <div id="card-div">
      <img src={props.cover} alt="Venue cover"></img>
      <p>{props.description}</p>
      <p>{props.name}</p>
      <p>{props.category}</p>
    </div>
  )
}

export default VenueCard

// key={idx}
// name={venue.name}
// description={venue.description}
// cover={venue.cover}
// category={venue.category}
