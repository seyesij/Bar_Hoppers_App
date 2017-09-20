import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Results extends Component {
  render(){
    return(
      <div className="bars">
       <div className="barimage">
        <Link to='/bar'>
          <img onClick={() => this.props.getBarData(this.props.searchResults.Name, this.props.searchResults.Zip)} src={this.props.searchResults.Bar_Image}  className="barimages" alt=""></img>
        </Link>
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
