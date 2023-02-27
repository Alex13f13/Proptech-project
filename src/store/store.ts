import { competitorsApi } from './../services/competitorsApi';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import competitorSlice from './slices/competitorSlice';

export const store = configureStore({
  reducer: {
    [competitorsApi.reducerPath]: competitorsApi.reducer,
    competitorSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(competitorsApi.middleware),
});

setupListeners(store.dispatch);
