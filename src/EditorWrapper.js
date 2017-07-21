import React, { Component } from 'react';
import App from './App';

var jsxUrl = '/sample.jsx';


class EditorWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {input: null};
  }

  loadJSXData = () => {

    var _this = this;

    fetch(jsxUrl)
    .then(function(response) {
      return Promise.resolve(response);
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      console.log("DATA", text);
      console.log("_this", _this);
      _this.setState({ input: text });
    });
  }

  updateInput = (event) => {
    this.setState({'input': event.target.value});
  }

  render() {
    if(this.state.input == null) {
        return (
            <button onClick={this.loadJSXData}>Load JSX data</button>
        );
    }

    var input = `
    <div className="App">
      Loading...
    </div>
    `;

    if(this.state.input) {
      input = this.state.input;
    }

    return (
      <div>
        <App input={input} jsonFile={this.props.jsonFile} />
        <textarea cols={60} rows={20}
            style={{fontSize: 18, position: 'absolute',
               right: 0,
               bottom: 0,
               visibility: 'hidden'}}
            value={input} onChange={this.updateInput}/>
      </div>
      );
  }
}

export default EditorWrapper;
