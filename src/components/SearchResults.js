import React from 'react';

const ResultsPage = ({ results, resultCount, searchValue, columns }) => (
  <div>
    <label>Showing {resultCount} {resultCount === 1 ? 'result' : 'results'} for: {searchValue}</label>

    <table className="table">
      <thead>
        <tr>
        <th scope="col">#</th>
        
        {columns.map(col => (
          <th key={col.value} scope="col">{col.displayName}</th>
        ))}

        </tr>
      </thead>
      <tbody>

      {results.map((result, index) => (
        <tr key={result.trackId}>
          <th scope="row">{index + 1}</th>
          
          {columns.map(col => (
            <td key={col.value}>{result[col.value]}</td>
          ))}
        
        </tr>
      ))}

      </tbody>
    </table>
    <ul className="list-group list-group-flush">
    </ul>
  </div>
);

export default ResultsPage;