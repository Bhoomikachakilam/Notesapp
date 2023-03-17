import React, { useState } from 'react';
import './search.css'

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
    const text = e.target.value;
        setSearchText(text);
        console.log(searchText)
     onSearch(text);
  }

  return (
      <div className="Searchbar">
      <input className="search" type="text" placeholder="Search notes" value={searchText} onChange={handleInputChange} />
    </div>
  )
}

export default Search
