import React, { Component } from 'react';

class Homepage extends Component {

  render(){
    return (
      <div className="home">
          <div className="searchbox">
            <h2 className="barHeading">Find your next bar spot!</h2>
              <form className="search">
                <div className="searchform">
                  <input type="text" placeholder="Enter zipcode"/>
                  <button onClick="" type="submit">Search</button>
                </div>
              </form>
          </div>
       </div>
    )
  }
}

export default Homepage;
