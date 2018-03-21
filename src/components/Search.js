import React from 'react';

const SearchPage = ({ handleSubmit, setSearchValue, error, fieldValue }) => (
    <div className="search-form">
    {error &&
        <div className="alert alert-danger">{error}</div>
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="artistName">Artist Name</label>
          <input
            className="form-control"
            id="artistName"
            type="text"
            value={fieldValue}
            placeholder="Enter the artist you are looking for"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      

        <button
          type="submit"
          className="btn btn-primary">Search</button>
      </form>
    </div>
  );

export default SearchPage;