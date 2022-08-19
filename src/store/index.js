import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {reducerLikes, reducerList} from "./reducers";
import {watchFetchList} from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        list: reducerList,
        likes:reducerLikes,
    }),
    composeEnhancers(applyMiddleware(
        sagaMiddleware
    ))
);
sagaMiddleware.run(watchFetchList);