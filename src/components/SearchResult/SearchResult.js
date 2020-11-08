import React from "react"
import "./SearchResult.css"
import Error from "../Error/Error"
import VenuesList from "../VenuesList/VenuesList"

function SearchResult(){
  return (
    <div>
      <Error/>
      <VenuesList/>
    </div>
  )
}

export default SearchResult
