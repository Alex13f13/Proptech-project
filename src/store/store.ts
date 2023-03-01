import { competitorsApi } from './../services/competitorsApi';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import competitorSlice from './slices/competitorSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["competitorState"],
};

const rootReducer = combineReducers({
  [competitorsApi.reducerPath]: competitorsApi.reducer,
  competitorState: competitorSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [competitorsApi.middleware, thunk],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
