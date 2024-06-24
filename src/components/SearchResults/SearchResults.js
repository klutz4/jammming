import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {

    return (
        <div className='search-results'>
            <h2>Results</h2>
            <Tracklist 
            tracks={props.searchResults}
            onAdd={props.onAdd}
            canBeAdded={props.canBeAdded}/>
        </div>
    )
};

export default SearchResults;