import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import allReducer from './reduxsrc/reducers/index.jsx';
import { Provider } from 'react-redux';
// global styles
import './style.scss';

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));