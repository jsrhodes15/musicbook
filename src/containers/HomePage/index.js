import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getSearchResults,
  setSearchValue,
} from '../../state/actions/search.actions';

import Search from '../../components/Search';

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
    const { fieldValue, setSearchValue , searchError } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fieldValue: state.searchState.fieldValue,
  searchError: state.searchState.searchError,
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(setSearchValue(value)),
  getSearchResults: value => dispatch(getSearchResults(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
