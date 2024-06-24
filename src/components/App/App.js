import React, { useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// for testing
import { get } from '../../mockBackEnd/fetch';
import tracks from '../../mockBackEnd/data';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = () => {
    get().then((response) => {
        alert('Response: ' + JSON.stringify(response,'',2))
        setSearchResults(response.data);
    });
    
  }

  const addTrack = (track) => {
    setPlaylistTracks((prev) => [track, ...prev]);
  }

  const removeTrack = (track) => {
    setPlaylistTracks(((prev) => prev.filter((currentTrack) => 
      currentTrack.id !== track.id)))
  }

  const savePlaylist = () => {
    
  }

  return (
    <div>
      <h1>jammming</h1>
      <div className='app'>
        <SearchBar onSearch={search}/>
        <div className='app-playlist'>
          <SearchResults 
          searchResults={searchResults}
          onAdd={addTrack} 
          canBeAdded={true}/>
          <Playlist 
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onSave={savePlaylist}
          canBeAdded={false}/>
        </div>
      </div>
      </div>
  );
}

export default App;
