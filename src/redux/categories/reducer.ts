import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCategoriesError,
  fetchCategoriesLoading,
  fetchCategoriesSuccess,
} from "./action";
import { ICategoryState } from "./interfaces";

const initialState = {
  isLoading: false,
  categories: [],
  error: "",
} as ICategoryState;

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchCategoriesLoading, (state) => {
    return { ...state, isLoading: true };
  });
  builder.addCase(
    fetchCategoriesSuccess,
    (state, { payload }): ICategoryState => {
      return {
        ...state,
        categories: payload ? payload : [],
        isLoading: false,
        error: "",
      };
    }
  );
  builder.addCase(
    fetchCategoriesError,
    (state, { payload }): ICategoryState => {
      return { ...state, error: payload, categories: [], isLoading: false };
    }
  );
});
