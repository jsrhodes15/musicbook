import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getSearchResults,
  setSearchValue,
} from '../../state/actions/search.actions';
import {
  getSearchResultsForList 
} from '../../state/selectors';

import Search from '../../components/Search';
import SearchResults from '../../components/SearchResults';

class HomePage extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { fieldValue, getSearchResults } = this.props;
    if (fieldValue.length < 1) {
      return false;
    }

    getSearchResults(fieldValue);

  }
  render() {
    const {
      fieldValue,
      searchError,
      resultCount,
      previousSearch,
      searchResults,
      gridColumns,
      setSearchValue,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Music Book</h1>
          <p>Search your favorite artist's name to find titles</p>
        </header>
        <Search
          fieldValue={fieldValue}
          setSearchValue={setSearchValue}
          handleSubmit={this.handleSubmit}
          error={searchError}
        />
        {!!searchResults.length &&
        <SearchResults
          results={searchResults}
          resultCount={resultCount}
          searchValue={previousSearch}
          columns={gridColumns}
        />
        }
      </div>
    );
  }
}

const gridColumns = [{value: 'trackName', displayName: 'Title'}, {value: 'artist', displayName: 'Artist'}]
const mapStateToProps = state => {
  const { fieldValue, searchError, previousSearch, resultCount } = state.searchState;
  return {
    fieldValue,
    searchError,
    resultCount,
    previousSearch,
    gridColumns,
    searchResults: getSearchResultsForList(state),  
  }
};

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(setSearchValue(value)),
  getSearchResults: value => dispatch(getSearchResults(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
