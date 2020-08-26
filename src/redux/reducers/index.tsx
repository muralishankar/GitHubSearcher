import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gitSearcherState from "./gitSearcherState";
import searchIndex from "./searchIndex";

export const persist = (persistConfig, reducer) =>
  persistReducer({ ...persistConfig, storage }, reducer);
  const persistConfig = {
    key: "persistedStore"
  };

export default combineReducers({ gitSearcherState, searchIndex: persist(persistConfig,searchIndex) });