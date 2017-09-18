import React, { Component } from 'react';
import Results from './Results';

class SearchResults extends Component {
  renderSearch(){
    if(this.props.dataLoaded){
      return this.props.searchResults.success.results.map((bars) => {
        return <Results
          key={bars.ID}
          searchResults={bars} />
      })
    } else {
      return <h1>Loading...</h1>
    }
  }

  render(){
    return (
      <div className="searchpage">
        <h1 className="pageTitle">🍹 Bars In This Area 🍹</h1>
        <div className='searchResults'>
          {this.renderSearch()}
        </div>
      </div>
    )
  }
}

export default SearchResults;
