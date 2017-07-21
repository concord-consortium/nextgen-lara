import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import EditorWrapper from './EditorWrapper';
import registerServiceWorker from './registerServiceWorker';


render((
  <div>
  <BrowserRouter>
    <EditorWrapper/>
  </BrowserRouter>
  </div>
), document.getElementById('root'))

registerServiceWorker();
