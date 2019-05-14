import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from "./reducers/common/common_reducers";
const windowExist = typeof window === 'object';
let initialState = {};

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged action: ", action);
//     next(action);
// };

let middleware = [thunk];

let configStore = (initialState = {}) => {
    if(windowExist) {
        return createStore(commonReducer,
            initialState,
            compose(
                applyMiddleware(...middleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
    } else {
        return createStore(commonReducer,
            initialState,
            compose(
                applyMiddleware(...middleware)
            )
        );
    }
};

export default configStore;