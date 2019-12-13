/* --------------------------------------------- */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

/* ------------------------------------------------------------------------------- */

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

/* ------------------------------------------------------------------------------- */

import rootReducer from "./reducer";

/* ------------------------------------------------------------------------------- */

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
rootElement
);

// , document.getElementById("root"));

/* --------------------------------------------- */