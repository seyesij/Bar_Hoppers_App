import React from 'react';

const Profile = (props) => {
  if(props.usersBars) {
    return (
      <div className="profilecontainer1">
        <h2>Your Favorite Bars!</h2>
        <div className="profilecontainer2">
          <div className="profile">
            {props.usersBars.map(bar => {
              return (
                <div className='bar'>
                 <h3>{bar.name}</h3>
                 <img key={bar.id} src={bar.image} alt={bar.name} id={bar.id}></img>
                 <br></br>
                 <div className="favinfo">
                    <p>{bar.city}</p>
                    <button className="favButton" onClick={() => props.removeFavorite(bar.id)}>Unfavorite</button>
                 </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
    )
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Profile;

