import React, { useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {

    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value)
    },[props.onNameChange]);

    return (
        <div className='playlist'>
            <input onChange={handleNameChange} value={props.playlistName}/>
            <Tracklist 
            tracks={props.playlistTracks}
            onRemove={props.onRemove}
            canBeAdded={props.canBeAdded}/>
            <button onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
};

export default Playlist;