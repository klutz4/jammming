import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {

    return (
        <div className='search-results'>
            <h2>Results</h2>
            <div className='track-list'>
            <Tracklist 
            tracks={props.searchResults}
            onAdd={props.onAdd}
            canBeAdded={props.canBeAdded}/>
            </div>
        </div>
    )
};

export default SearchResults;