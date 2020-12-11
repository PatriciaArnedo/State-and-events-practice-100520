/* eslint-disable no-unused-expressions */
import React, { Component } from "react"
import apiResponse from '../api'
import DogCard from '../Components/DogCard'

class DogsList extends Component {
  
  dogList = () => {
    return apiResponse.map(dog => (<DogCard dogObj={dog} />))
  }
  
  render() {
    
    return (
      <div className="list">
        {this.dogList()}
      </div>
      )
  }
}

export default DogsList;
