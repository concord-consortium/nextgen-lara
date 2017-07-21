import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import EditorWrapper from './EditorWrapper';
import registerServiceWorker from './registerServiceWorker';

var jsonGlobalFile = null;
var url = window.location.search;
var params = url.split('=');
if(params.length > 1) {
    jsonGlobalFile = params[1];
}
console.log("JSON global file", jsonGlobalFile);

render((
  <div>
  <BrowserRouter>
    <EditorWrapper jsonFile={jsonGlobalFile} />
  </BrowserRouter>
  </div>
), document.getElementById('root'))

registerServiceWorker();
