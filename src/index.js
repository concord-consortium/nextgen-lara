import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

render((
  <div>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </div>
), document.getElementById('root'))

registerServiceWorker();
