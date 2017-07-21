import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
// how to request from local server http://localhost:3000/Interactions%20within%20the%20atmosphere_version_1.json
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
        <iframe src="http://concord.org"/>
        <Pages pages={pages} />
        <Route path='/pages/' component={Page} />
      </div>
    );
  }
}

export default App;
