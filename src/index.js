import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import logoSrc from './assets/img/logo.svg';

const App = () => (
  <div>
    <img src={logoSrc} />
    <h1>Webpack React Starter</h1>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
