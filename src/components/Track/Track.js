import React, { useCallback } from 'react';
import './Track.css';

function Track(props) {

    const addTrack = useCallback((track) => {
        props.onAdd(props.track);
    },[props.onAdd, props.track])

    const removeTrack = useCallback((track) => {
        props.onRemove(props.track);
    },[props.onRemove, props.track]);

    const addOrRemoveIcon = () => {
        if (props.canBeAdded) {
            return (
                <button className='addOrRemove' onClick={addTrack}> Add </button>
            )
        } else {
           return ( 
           <button className='addOrRemove' onClick={removeTrack}> Remove </button>
        )
        }
    }

    return (
        <div className='track'>
            <div className='track-info'>
                <h3>{props.track.name}</h3>
                <p>Artist: {props.track.artist} | Album: {props.track.album}</p>
            </div>
            {addOrRemoveIcon()}
        </div>
    )
};

export default Track;