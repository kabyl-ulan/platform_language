import { createAction } from "@reduxjs/toolkit";

//local
import PRIVATE_API, { PUBLIC_API } from "../../api/api";
import { ICategory, ICategoryAdd } from "../categories/interfaces";
import { AppDispatch } from "../store";

export const fetchSubCategoriesSuccess = createAction(
  "categories/fetchSubCategoriesSuccess"
);

export const fetchSubCategoriesLoading = createAction(
  "categories/fetchSubCategoriesLoading"
);

export const fetchSubCategoriesError = createAction(
  "categories/fetchSubCategoriesError"
);

export const getSubCategories =
  (categoryId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchSubCategoriesLoading());
      const { data } = await PUBLIC_API.get(`categories/${categoryId}`);
      dispatch(fetchSubCategoriesSuccess(data));
    } catch (e: any) {
      console.log(e);
      dispatch(fetchSubCategoriesError(e.message));
    }
  };

export const deleteSubCategories =
  (id: number, parentCategoryId?: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchSubCategoriesLoading());
      await PRIVATE_API.delete(`categories/${id}`);
      !!parentCategoryId &&
        dispatch(getSubCategories(parseInt(parentCategoryId)));
    } catch (e: any) {
      console.log(e);
      dispatch(fetchSubCategoriesError(e.message));
    }
  };

export const addSubCategories =
  (category: ICategoryAdd, parentCategoryId?: number) =>
  async (dispatch: AppDispatch) => {
    try {
      const formData = new FormData();
      formData.append("parentCategoryId", category.parentCategoryId);
      formData.append("categoryName", category.categoryName);
      dispatch(fetchSubCategoriesLoading());
      await PRIVATE_API.post("categories/create", formData);
      !!parentCategoryId && dispatch(getSubCategories(parentCategoryId));
    } catch (e: any) {
      console.log(e);
      dispatch(fetchSubCategoriesError(e.message));
    }
  };

export const changeSubCategories =
  (category: ICategory, parentCategoryId?: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const formData = new FormData();
      formData.append("categoryName", category.categoryName);
      dispatch(fetchSubCategoriesLoading());
      await PRIVATE_API.patch(`categories/${category.id}`, formData);
      !!parentCategoryId &&
        dispatch(getSubCategories(parseInt(parentCategoryId)));
    } catch (e: any) {
      console.log(e);
      dispatch(fetchSubCategoriesError(e.message));
    }
  };
