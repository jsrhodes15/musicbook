import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchResults } from '../../state/actions/search.actions';

class HomePage extends Component {
  componentDidMount() {
    const { setSearchResults } = this.props;
    setSearchResults('5');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(null, { setSearchResults })(HomePage);
