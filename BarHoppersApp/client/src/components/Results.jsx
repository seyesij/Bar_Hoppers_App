import React, { Component } from 'react'

class Results extends Component {
  render(){
    return(
      <div className="bars">
       <div className="barimage">
        <img className="barimages" src={this.props.searchResults.Bar_Image} alt=""></img>
        </div>
        <div className="bardetail">
          <h2>{this.props.searchResults.Name}</h2>
          <p className="barcity">{this.props.searchResults.City}</p>
          <p className="bartype">{this.props.searchResults.Type}</p>
        </div>
      </div>
    )
  }
}

export default Results;
