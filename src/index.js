import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let model ={ clicks: 0 };

function render() {
  ReactDOM.render(
  <React.StrictMode>
    <App clicks={model.clicks} onClick={()=> { model.clicks += 1; render(); }} />
  </React.StrictMode>,
  document.getElementById('root')
);
  }
render();

serviceWorker.unregister();
