import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import laraData from './data/interactions-within-the-atmosphere-version-1.json';
import Pages    from './Pages.js';
import Page     from './Page.js';

class App extends Component {

  render() {
    var pages = laraData.pages;

    console.log("LARA data", laraData);
    console.log("pages", pages);

    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <h2>Welcome to NextGen-LARA</h2>
          </Link>
        </div>
        <Pages pages={pages} />
        <Route path='/pages/' component={Page} />
      </div>
    );
  }
}

export default App;
