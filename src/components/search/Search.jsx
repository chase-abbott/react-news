import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchInput, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search-input"></label>
    <input 
      type="text" 
      id="search-input"
      name="searchInput"
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
