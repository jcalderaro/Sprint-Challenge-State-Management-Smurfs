/* -----------------------------------------------------------------  */ 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
/* -----------------------------------------------------------------  */ 
/* I don't understand these imports below --------------------------  */ 
/* -----------------------------------------------------------------  */ 
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from ".//reducer/index";
/* -----------------------------------------------------------------  */ 
/* I don't understand these imports above --------------------------  */ 
/* -----------------------------------------------------------------  */ 
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
/* -----------------------------------------------------------------  */ 