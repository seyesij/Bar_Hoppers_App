import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleBarPage extends Component {

  render(){
    if(this.props.barLoaded){
      return(
      <div className="singlecontainer">
       <div className="singlepage">
          <div className="singleheader">
            <div className="barname">
              <h1>{this.props.barData.Name}</h1>
            </div>
            <div className="barpic">
              <img src={this.props.barData.Bar_Image}  className="singlepageimage" alt=""></img>
            </div>
          </div>
          <div className="singledetails">
            <h2>Bar Information</h2>
            <p><span>Address: </span>{this.props.barData.Address}, {this.props.barData.City}, {this.props.barData.Zip}</p>
            <p><span>Phone Number: </span>{this.props.barData.Phone}</p>
            <p><span>Website: </span>{this.props.barData.Bar_Website || this.props.barData.Bar_Url}</p>
            <p><span>Bar Type: </span>{this.props.barData.Type}</p>
            <p><span>Amenities: </span>{this.props.barData.Amenity}</p>
            <p><span>Music Type: </span>{this.props.barData.Music_Type || this.props.barData.Music_Source}</p>
            <p><span>Dress Code: </span>{this.props.barData.Dress_Code}</p>
            <p><span>Payment Options: </span>{this.props.barData.Payment_Options}</p>
            <p><span>Hours of Operation: </span>{this.props.barData.Hours}</p>
            {this.props.auth
              ? <Link to='/profile'>
              <button className="fav" onClick={() => this.props.addFavorite()}>Favorite</button>
                </Link>
              : ''}
          </div>
       </div>
       </div>
    )
  } else {
      return <h1>Loading...</h1>
  }
 }
}

export default SingleBarPage;
