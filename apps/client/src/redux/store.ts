import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/redux/authSlice"
import { apiSlice } from "./customFetchBase";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware()
  .concat(apiSlice.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
