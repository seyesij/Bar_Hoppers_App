import React from 'react';

const Profile = (props) => {
  return(
    <div className="profile">
      <h1 className="profileheading">{props.user.username}'s Profile</h1>
    </div>
  )
}

export default Profile;
