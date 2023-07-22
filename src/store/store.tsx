import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as reducers from "./ducks";


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["openedCard"]
}

const persistReducers = persistReducer(persistConfig, combineReducers({ ...reducers }));

export const store = createStore(
  persistReducers,
  composeWithDevTools()
)

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch