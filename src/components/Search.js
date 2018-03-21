import React from 'react';


const SearchPage = ({ handleSubmit, setSearchValue, value }) => (
  <form onSubmit={handleSubmit}>
  <label>Artist</label>
    <input
      className="form-control"
      name="artist"
      type="text"
      value={value}
      onChange={(e) => setSearchValue(e.target.value)}
    />

    <button
      type="submit"
      className="btn btn-primary">Search</button>
  </form>
)

export default SearchPage;