import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Root from './components/Root';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
