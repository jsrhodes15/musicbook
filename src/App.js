import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
      </Router>
    );
  }
}

export default App;
