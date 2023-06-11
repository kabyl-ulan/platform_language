import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//local
import { api } from "./api";
import openBurger from "./burger-menu/reducer";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    openBurger,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();
