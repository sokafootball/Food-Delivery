import React from "react"
import "./SearchResult.css"
import Error from "../Error/Error"
import Loader from "../Loader/Loader"
import VenuesList from "../VenuesList/VenuesList"

function SearchResult(props){

  return (
    <div id="search-result-div">
      {props.availableVenues.length > 0 ? <VenuesList availableVenues={props.availableVenues}/> : <Error/>}
    </div>
  )
}

export default SearchResult
