import React, { useState, useCallback } from 'react';


function SearchBar(props) {
    const [input, setInput] = useState('');

    const handleInputChange = useCallback((event) => {
        setInput(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(input);
    }, [props.onSearch, input]);

    return (
        <div className='search-bar'>
            <h2>Search for your favorite song!</h2>
            <input placeholder='Enter your favorite song' value={input} onChange={handleInputChange} type='text' />
            <button className='search-button' onClick={search}>Search</button>
        </div>
    )
};

export default SearchBar;