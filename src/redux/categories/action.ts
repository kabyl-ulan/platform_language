import { createAction } from "@reduxjs/toolkit";

//local
import PRIVATE_API, { PUBLIC_API } from "../../api/api";
import { AppDispatch } from "../store";
import { ICategory, ICategoryAdd } from "./interfaces";

export const fetchCategoriesSuccess = createAction<ICategory[]>(
  "categories/fetchCategoriesSuccess"
);

export const fetchCategoriesLoading = createAction(
  "categories/fetchCategoriesLoading"
);

export const fetchCategoriesError = createAction<string>(
  "categories/fetchCategoriesError"
);

export const getCategories = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchCategoriesLoading());
    const { data } = await PUBLIC_API.get("categories");
    dispatch(fetchCategoriesSuccess(data));
  } catch (e: any) {
    console.log(e);
    dispatch(fetchCategoriesError(e.message));
  }
};

export const deleteCategories =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchCategoriesLoading());
      await PRIVATE_API.delete(`categories/${id}`);
      dispatch(getCategories());
    } catch (e: any) {
      console.log(e);
      dispatch(fetchCategoriesError(e.message));
    }
  };

export const addCategories =
  (category: ICategoryAdd) => async (dispatch: AppDispatch) => {
    try {
      const formData = new FormData();
      formData.append("parentCategoryId", category.parentCategoryId);
      formData.append("categoryName", category.categoryName);
      dispatch(fetchCategoriesLoading());
      await PRIVATE_API.post("categories/create", formData);
      dispatch(getCategories());
    } catch (e: any) {
      console.log(e);
      dispatch(fetchCategoriesError(e.message));
    }
  };

export const changeCategories =
  (category: ICategory) => async (dispatch: AppDispatch) => {
    try {
      const formData = new FormData();
      formData.append("categoryName", category.categoryName);
      dispatch(fetchCategoriesLoading());
      await PRIVATE_API.patch(`categories/${category.id}`, formData);
      dispatch(getCategories());
    } catch (e: any) {
      console.log(e);
      dispatch(fetchCategoriesError(e.message));
    }
  };
