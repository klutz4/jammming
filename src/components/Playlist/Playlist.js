import React, { useState, useEffect } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('New Playlist');

    const handleChange = (event) => {
        setPlaylistName(event.target.value)
    }

    return (
        <div className='playlist'>
            <input value={playlistName} onChange={handleChange}/>
            <Tracklist 
            tracks={props.playlistTracks}
            onRemove={props.onRemove}
            canBeAdded={props.canBeAdded}/>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;