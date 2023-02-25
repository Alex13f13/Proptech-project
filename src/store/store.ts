import { competitorsApi } from './../services/competitorsApi';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [competitorsApi.reducerPath]: competitorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(competitorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
