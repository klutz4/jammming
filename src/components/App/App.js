import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { get } from '../../mockBackEnd/fetch';
import tracks from '../../mockBackEnd/data';

function App() {

  const search = () => {
    get().then((response) => {
        alert('Response: ' + JSON.stringify(response,'',2))
    });
}

  return (
    <div>
      <h1>jammming</h1>
      <div className='app'>
        <SearchBar onSearch={search}/>
        <div className='app-playlist'>
          <SearchResults searchResults={tracks} />
          <Playlist />
        </div>
      </div>
      </div>
  );
}

export default App;
