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
    const { value, getSearchResults } = this.props;
    if (value.length < 1) {
      return false;
    }

    getSearchResults(value);

  }
  render() {
    const { value, setSearchValue } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Music Book</h1>
          <p>Search your favorite artist's name to find titles</p>
        </header>
        <Search
          value={value}
          setSearchValue={setSearchValue}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.searchState.value,
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(setSearchValue(value)),
  getSearchResults: value => dispatch(getSearchResults(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
