import React, { useState, useCallback } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

// for testing
// import { get } from '../../mockBackEnd/fetch';
// import tracks from '../../mockBackEnd/data';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const search = (input) => {
    Spotify.search(input).then(setSearchResults);
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
    Spotify.savePlaylist(playlistName, trackUris).then( () => {
      // reset playlist tracks and name
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    }
  )
  },[playlistName, playlistTracks]);

  return (
    <div>
      <header>
        <h1>ja<span>mmm</span>ing</h1>
      </header>
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
      <footer>Created by Kelly Lutz.</footer>
      </div>
  );
}

export default App;
