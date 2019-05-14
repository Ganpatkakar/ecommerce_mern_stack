import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import App from "./App";
import { loadableReady } from '@loadable/component'

const state = window.__STATE__;
let store = configStore(state);
console.log("store on client",store.getState());

const rootEl = document.getElementById("app");
loadableReady(() => hydrate(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
));
