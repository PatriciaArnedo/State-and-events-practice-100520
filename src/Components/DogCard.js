import React from "react";

class DogCard extends React.Component {
  
  clickHandler = () => {
    if(!this.state.clicked){
      this.setState(
        {
          clicked: true,
          h2Text: "Bark"
        }
      )
    } else {
      this.setState(
        {
          clicked: false,
          h2Text: ""
        }
      )
    }
  }

  state ={
    clicked: false,
    h2Text: ""
  }
  
  render(){
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dogObj.name}</h2>
          <img alt="dog" src={this.props.dogObj.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler} >Bark</button>
        </span>
        <span>
          <h2 className="bark">{this.state.h2Text}</h2>
        </span>
      </div>
    )
  }
}

export default DogCard;
