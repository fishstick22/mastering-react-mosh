import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
