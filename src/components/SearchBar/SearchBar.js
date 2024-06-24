import React, {useState, useEffect} from 'react';


function SearchBar(props) {
    const [input, setInput] = useState('');

    const handleInputChange = event => {
        setInput(event.target.value);
    };



    return (
        <div className='search-bar'>
            <h2>Search for your favorite song!</h2>
            <input placeholder='Enter your favorite song' value={input} onChange={handleInputChange} type='text' />
            <button className='search-button' onClick={props.onSearch}>Search</button>
        </div>
    )
};

export default SearchBar;