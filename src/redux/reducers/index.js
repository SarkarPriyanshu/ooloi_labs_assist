import { combineReducers } from "redux";
import contentReducer from './ContentReducer.Reducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['appState']
}

const Reducer = combineReducers({ appState: contentReducer })

export default persistReducer(persistConfig, Reducer)