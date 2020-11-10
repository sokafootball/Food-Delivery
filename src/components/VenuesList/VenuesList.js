import React from "react"
import "./VenuesList.css"
import VenueCard from "../VenueCard/VenueCard"

function VenuesList(props){

  const venueCards = props.availableVenues.map((venue, idx) =>
    <VenueCard
      key={idx}
      name={venue.name}
      description={venue.description}
      cover={venue.cover}
      category={venue.category}
    />
  )

  return (
    <div>{venueCards}</div>
  )
}

export default VenuesList
