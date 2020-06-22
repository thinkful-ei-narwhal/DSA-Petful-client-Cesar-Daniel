import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from '../src/components/root/Root';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
