import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//local
import { getAllCategoriesApi } from "./getAllCategoriesApi";
import openBurger from "./burger-menu/reducer";

export const store = configureStore({
  reducer: {
    [getAllCategoriesApi.reducerPath]: getAllCategoriesApi.reducer,
    openBurger,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllCategoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();
