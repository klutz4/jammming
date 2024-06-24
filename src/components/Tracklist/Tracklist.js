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
            />
             );
            })}                

        </div>
    );
};

export default Tracklist;