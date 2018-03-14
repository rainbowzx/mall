import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
