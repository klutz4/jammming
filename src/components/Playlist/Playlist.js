import React from 'react';

function Playlist(props) {
    return (
        <div className='playlist'>
            <h2><input placeholder="Playlist Title"/></h2>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;