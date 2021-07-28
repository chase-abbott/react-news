import React, { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form>
      <label htmlFor="search-input"></label>
      <input 
        type="text" 
        id="search-input"
        value={inputValue}
        onChange={setInputValue}
      ></input>
      <button> Submit </button>
    </form>
  );
};


export default Search;
