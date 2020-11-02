import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './bootset.css';
//import reducers from "./reducers";

//const store = createStore(reducers)

ReactDOM.render(<App/>, document.querySelector('#root'))
// ReactDOM.render(
//     <Provider store ={store}>
//     <App />
// </Provider>, document.querySelector('#root'));


