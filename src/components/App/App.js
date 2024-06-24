import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>jammming</h1>
      </header>
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
