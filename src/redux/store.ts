import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

// Configure your store with the RTK Query middleware
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Export the store type
export type RootState = ReturnType<typeof store.getState>;
