import React from 'react';

function Track(props) {

    const addTrack = (track) => {
        props.onAdd(props.track);
    }

    const removeTrack = (track) => {
        props.onRemove(props.track);
    }

    const addOrRemoveIcon = () => {
        if (props.canBeAdded) {
            return (
                <button onClick={addTrack}> Add </button>
            )
        } else {
           return ( 
           <button onClick={removeTrack}> Remove </button>
        )
        }
    }

    return (
        <div className='track'>
        <h3>{props.track.name}</h3>
        <p>Artist: {props.track.artists[0].name}</p>
        <p>Album: {props.track.album.name}</p>
        {/* {addOrRemoveIcon}
         */}
        {addOrRemoveIcon()}
        </div>
    )
};

export default Track;