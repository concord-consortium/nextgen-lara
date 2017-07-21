import React, { Component } from 'react';
import App from './App';

class EditorWrapper extends Component {

  constructor(props) {
    super(props);
    var input = `
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
    `;
    this.state = {
      input
    }
  }

  updateInput = (event) => {
    this.setState({'input': event.target.value});
  }

  render() {
    return (
      <div>
        <App input={this.state.input}/>
        <textarea cols={80} rows={40}
            style={{fontSize: '18px'}}
            value={this.state.input} onChange={this.updateInput}/>
      </div>
      );
  }
}

export default EditorWrapper;
