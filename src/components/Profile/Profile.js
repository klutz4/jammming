import React from 'react';
import './Profile.css';

function Profile(props) {
    // props are profile, onLogIn, onLogOut
    const displayName = props.profile.displayName;

    const logInButton = (
        <div className='profile-button'>
            <button onClick={props.onLogIn}>Log In</button>
        </div>
    )

    const logOutButton = (
        <div className='profile-button'>
            <button onClick={props.onLogOut}>Log Out</button>
        </div>
    )

    return (
        <div className='profile'>
            <img src={props.profile.imgUrl}/>
            <p>{displayName}</p>
            {displayName === 'Guest' ? logInButton : logOutButton}
        </div>
    )
}

export default Profile;