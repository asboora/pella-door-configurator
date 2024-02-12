// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import essentialReducer from "./essential/essentialPatioDoorSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { essentialService } from "./essential/essentialApi";

export const store = configureStore({
  reducer: {
    essentialPatioDoor: essentialReducer,
    // Add the generated reducer as a specific top-level slice
    [essentialService.reducerPath]: essentialService.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(essentialService.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
