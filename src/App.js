import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Pages    from './Pages.js';
import Page     from './Page.js';

var jsonUrl = 'http://localhost:3000/interactions-within-the-atmosphere-version-1.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      laraData: null
    }
  }

  loadLaraData() {

    var _this = this;

    fetch(jsonUrl)
    .then(function(response) {
      return Promise.resolve(response);
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("DATA", data);
      console.log("_this", _this);
      _this.setState({ laraData: data });
    });

  }

  render() {

    var laraData = this.state.laraData;

    console.log("render()", laraData);

    if(laraData == null) {
        return (
            <button onClick={this.loadLaraData.bind(this)}>Load LARA data</button>
        );
    } 

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
