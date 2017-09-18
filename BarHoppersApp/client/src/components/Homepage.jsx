import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render(){
    return (
      <div className="home">
          <div className="searchbox">
            <h2 className="barHeading">Find your next bar spot!</h2>
              <form className="search">
                <div className="searchform">
                  <input onChange={this.props.inputSearch} type="text" placeholder="Enter zipcode"/>
                  <Link to='/results'>
                    <button onClick={() => this.props.handleSearch()} type="submit">Search</button>
                  </Link>
                </div>
              </form>
          </div>
       </div>
    )
  }
}

export default Homepage;
