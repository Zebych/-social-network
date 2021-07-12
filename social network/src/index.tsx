import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redax/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";
import {StoreType} from "./Redax/store";


const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App  />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

store.subscribe(()=> {
    renderTree()
})
renderTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
