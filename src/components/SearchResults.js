import React from 'react';

const ResultsPage = ({ results, resultCount, searchValue }) => (
  <div>
    <label>Showing {resultCount} {resultCount === 1 ? 'result' : 'results'} for: {searchValue}</label>
    <ul className="list-group list-group-flush">
      {results.map(result => (
        <li
          key={result.trackId}
          className="list-group-item">{result.trackName}</li>
      ))}
    </ul>
  </div>
);

export default ResultsPage;