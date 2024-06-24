import React, { useState, useCallback } from 'react';
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
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const search = () => {
    get().then((response) => {
        alert('Response: ' + JSON.stringify(response,'',2))
        setSearchResults(response.data);
    });
    
  }

  const addTrack = useCallback((track) => {
    setPlaylistTracks((prev) => [track, ...prev]);
  },[playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks(((prev) => prev.filter((currentTrack) => 
      currentTrack.id !== track.id)))
  },[]);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  },[]);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    // save to Spotify

    // reset playlist tracks and name
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  },[playlistName, playlistTracks]);

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
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
          canBeAdded={false}/>
        </div>
      </div>
      </div>
  );
}

export default App;
