import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducers/index";
// import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const Middleware = [] //logger

const store = createStore(Reducer, applyMiddleware(...Middleware))

export const persistor = persistStore(store)

export default store