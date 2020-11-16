import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './bootset.css';
import reducers from "./reducers/index";


ReactDOM.render(
    <Provider store ={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
</Provider>, document.querySelector('#root'));


