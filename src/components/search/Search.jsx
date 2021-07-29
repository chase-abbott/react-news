import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchInput, onChange, onSubmit }) => (
  <form 
    onSubmit={onSubmit}
    data-testid="search-form">
    <label htmlFor="search-input">Search</label>
    <input 
      type="text" 
      name="searchInput"
      id="search-input"
      value={searchInput}
      onChange={onChange}
    ></input>
    <button> Submit </button>
  </form>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string,

};

export default Search;
