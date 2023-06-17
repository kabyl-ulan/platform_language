import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//local
import { getAllCategoriesApi } from "./getAllCategoriesApi";
import openBurger from "./burger-menu/reducer";
import categories from "./categories/reducer";
import subCategories from "./subCategories/reducer";
import users from "./users/reducer";

const rootReducer = combineReducers({
  [getAllCategoriesApi.reducerPath]: getAllCategoriesApi.reducer,
  openBurger,
  categories,
  subCategories,
  users,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getAllCategoriesApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
