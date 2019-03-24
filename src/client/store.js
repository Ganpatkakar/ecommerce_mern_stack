import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './reducers/common/common_reducers';


const myLogger = (store) => (next) => (action) => {
    console.log("Logged action: ", action);
    next(action);
};

export default createStore(
    combineReducers({
        commonStore: commonReducer
    }), {},
    applyMiddleware(thunk, myLogger)
);