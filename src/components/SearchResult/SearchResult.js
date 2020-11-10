import React from "react"
import "./SearchResult.css"
import Error from "../Error/Error"
import Loader from "../Loader/Loader"
import VenuesList from "../VenuesList/VenuesList"

function SearchResult(props){

  let componentToRender
  switch(props.loadingStatus){
    case props.loadingStates.loading:
      componentToRender = <Loader />
      break
    case props.loadingStates.error:
      componentToRender = <Error />
      break
    case props.loadingStates.loaded:
      componentToRender = <VenuesList availableVenues={props.availableVenues}/>
      break

    default:
      break
  }

  return (
    <div id="search-result-div">
      {componentToRender}
    </div>
  )
}

export default SearchResult
