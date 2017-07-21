import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Pages    from './Pages.js';
import Page     from './Page.js';
import * as Babel from 'babel-standalone';

var jsonUrl = '/has-climate-activity.json';

// Specify activity=<json-file>
//
// E.g.
//
// has-climate-activity.json
// has-land-activity.json

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      laraData: null
    }
  }

  loadLaraData = () => {

    var _this = this;

    var _jsonUrl;
    if(window.location.hostname.indexOf('localhost') >= 0){
      _jsonUrl = jsonUrl;
    } else {
      _jsonUrl = '/nextgen-lara' + jsonUrl;
    }


    fetch(_jsonUrl)
    .then(function(response) {
      return Promise.resolve(response);
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("App.js ajax DATA", data);
      console.log("_this", _this);
      _this.setState({ laraData: data });
    });

  }

  render() {

    var laraData = this.state.laraData;

    console.log("render()", laraData);


    if(laraData == null) {

        if(this.props.jsonFile != null) {
            jsonUrl = "/" + this.props.jsonFile;
            this.loadLaraData();
            return null;
        }

        return (
            <div style={{align: 'top'}}>
              <button onClick={this.loadLaraData}>Load LARA data</button>
            </div>
        );
    }

    var pages = laraData.pages;
    var name = laraData.name;

    console.log("LARA data", laraData);
    console.log("pages", pages);

    // ReactDOM.render(<App />, document.getElementById('root'));


    var output;
    try {
      output = Babel.transform(this.props.input, { presets: ['react'] }).code;
      this.prevOutput = output;
    } catch(e) {
      console.log("Error in parsing");
      output = this.prevOutput;
    }

    output = "return " + output.trim();
    console.log(output);
    var obj = { React, Link, Pages, Route, Page, pages, name};
    var template;
    try{
      var myFunct = new Function(...Object.keys(obj), output);
      template = myFunct(...Object.values(obj));
      console.log(template);
      this.prevTemplate = template;
    } catch (e) {
      template = this.prevTemplate;
    }
    return template;
  }

}

export default App;
