// Provider is included
// Provider makes the store available to all sub-components

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'


let newStore = store();


ReactDOM.render(
    <Provider store={newStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);