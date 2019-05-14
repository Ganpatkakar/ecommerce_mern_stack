import React from "react";
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import configStore from "../../client/redux/store";
import App from "../../client/app";

const content_initialState = () => {
    const store = configStore();
    const content = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const preloadedState = store.getState();
    console.log("store on server", preloadedState);
    return {content, preloadedState};
};

export default content_initialState;
