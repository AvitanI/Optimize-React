import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App.jsx';

/* ONLY FOR TESTING */
    window.Perf = Perf;
/* ONLY FOR TESTING */

ReactDOM.render(<App />, document.getElementById('app'));