import React, { Component } from 'react';
import './App.css';
import laraData from './data/interactions-within-the-atmosphere-version-1.json';
import Page from './Page.js';

class App extends Component {

  render() {
    var pages = laraData.pages;

    console.log("LARA data", laraData);
    console.log("pages", pages);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to NextGen-LARA</h2>
        </div>
        <div className="navBar">
          { Object.keys(pages).map(function (page, index) {
            console.log('page: ', page); 
            return (
              <Page number={index} />
              );
          }, this)}
        </div>
        <div className="pageContent">
          Page n content here?
        </div>
      </div>
    );
  }
}

export default App;
