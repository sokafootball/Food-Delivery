import React from "react"
import "./VenuesList.css"
import VenueCard from "../VenueCard/VenueCard"

function VenuesList(props){

  const venueCards = props.availableVenues.map((venue) =>
    <VenueCard
      key={venue.id}
      name={venue.name}
      description={venue.description}
      cover={venue.cover}
      category={venue.category}
    />
  )

  return (
    <div id="venues-list-div">
      <p id="cards-list-header">Ecco i migliori risultati per te</p>
      <div id="cards-div">{venueCards}</div>
    </div>
  )
}

export default VenuesList
