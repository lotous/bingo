import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppLayout } from './shared';
import reportWebVitals from './core/http/reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./core";
import {BrowserRouter} from "react-router-dom";
import Router from "./router";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();