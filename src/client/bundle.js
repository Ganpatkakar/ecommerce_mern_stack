import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import App from "./App";

const state = window.__STATE__;
let store = configStore(state);
const rootEl = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
