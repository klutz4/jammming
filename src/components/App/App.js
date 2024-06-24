import logo from '../logo.svg';
import '../styles/App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Track from './Track';
import Tracklist from './Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>jammming</h1>
      </header>
      <main>
      <SearchBar />
      
      </main>
    </div>
  );
}

export default App;
