import { competitorsApi } from './../services/competitorsApi';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    [competitorsApi.reducerPath]: competitorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(competitorsApi.middleware),
});

setupListeners(store.dispatch);
