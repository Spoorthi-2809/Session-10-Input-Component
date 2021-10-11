import React from 'react';

function Search({onSearch}) {
    return (
        <div>
            <label htmlFor='search'>Search from New Component: </label>
            <input type="text" onChange={onSearch}/>
             <label htmlFor='search'>Password: </label>
            <input type="password" onChange={onSearch}/>
        </div>
    );
}

export default Search;