import React from 'react';

function Track(props) {
    return (
        <div className='track'>
        <h3>{props.track.name}</h3>
        <p>Artist: {props.track.artists[0].name}</p>
        <p>Album: {props.track.album.name}</p>
        </div>
    )
};

export default Track;