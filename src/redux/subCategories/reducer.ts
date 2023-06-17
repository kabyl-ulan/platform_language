import { createReducer } from "@reduxjs/toolkit";

//local
import {
  fetchSubCategoriesError,
  fetchSubCategoriesLoading,
  fetchSubCategoriesSuccess,
} from "./action";
import { ISubCategoryState } from "./interfaces";

const initialState = {
  isLoading: false,
  subCategories: [],
  error: "",
} as ISubCategoryState;

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchSubCategoriesLoading, (state) => {
    return { ...state, isLoading: true };
  });
  builder.addCase(
    fetchSubCategoriesSuccess,
    (state, { payload }): ISubCategoryState => {
      return {
        ...state,
        subCategories: payload ? payload : [],
        isLoading: false,
        error: "",
      };
    }
  );
  builder.addCase(
    fetchSubCategoriesError,
    (state, { payload }): ISubCategoryState => {
      return { ...state, error: payload, subCategories: [], isLoading: false };
    }
  );
});
