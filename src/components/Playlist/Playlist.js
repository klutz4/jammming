import React, { useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist(props) {

    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value)
    },[props.onNameChange]);

    return (
        <div className='playlist'>
            <h2><input className='playlist-name' onChange={handleNameChange} value={props.playlistName}/></h2>
            <Tracklist 
            tracks={props.playlistTracks}
            onRemove={props.onRemove}
            canBeAdded={props.canBeAdded}/>
            <button className='save-button' onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
};

export default Playlist;