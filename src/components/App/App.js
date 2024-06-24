import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <h1>jammming</h1>
      <div className='app'>
        <SearchBar />
        <div className='app-playlist'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
      </div>
  );
}

export default App;
