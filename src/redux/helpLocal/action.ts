import { createAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export const fetchIdCategory = createAction<number>(
  "helpLocal/fetchIdCategory"
);

export const fetchIdSubCategory = createAction<number>(
  "helpLocal/fetchIdSubCategory"
);

export const setIdCategory = (id: number) => (dispatch: AppDispatch) => {
  dispatch(fetchIdCategory(id));
};

export const setIdSubCategory = (id: number) => (dispatch: AppDispatch) => {
  dispatch(fetchIdSubCategory(id));
};
