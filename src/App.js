import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Pages    from './Pages.js';
import Page     from './Page.js';
import * as Babel from 'babel-standalone';

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

    // ReactDOM.render(<App />, document.getElementById('root'));


    var output = Babel.transform(this.props.input, { presets: ['react'] }).code;
    output = "return " + output.trim();
    console.log(output);
    var obj = { React, Link, Pages, Route, Page, pages};
    var myFunct = new Function(...Object.keys(obj), output);
    var template = myFunct(...Object.values(obj));
    console.log(template);

    return template;
  }

}

export default App;
