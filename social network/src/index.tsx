import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}  />
        </BrowserRouter>, document.getElementById('root')
    );
}

store.subscribe(renderTree)
renderTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();