import React from "react"
import "./VenuesList.css"
import VenueCard from "../VenueCard/VenueCard"
const maxDescriptionLength = 40

function VenuesList(props){

  const venueCards = props.availableVenues.map((venue) => {

    let description = venue.description.length > maxDescriptionLength
      ? `${venue.description.slice(0, maxDescriptionLength)}...`
      : venue.description

    return <VenueCard
      key={venue.id}
      name={venue.name}
      description={description}
      cover={venue.cover}
      category={venue.category}
    />
  }


  )

  return (
    <div id="venues-list-div">
      <p id="cards-list-header">Ecco i migliori risultati per te</p>
      <div id="cards-div">{venueCards}</div>
    </div>
  )
}

export default VenuesList
