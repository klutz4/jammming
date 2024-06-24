import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {

    return (
        <div className='tracklist'>
        {props.tracks.map((track) => {
       
        return (
            <Track 
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            canBeAdded={props.canBeAdded}
            />
             );
            })}                

        </div>
    );
};

export default Tracklist;