import { createAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import PRIVATE_API from "../../api/api";

export const fetchUserSuccess = createAction("user/fetchUserSuccess");
export const fetchUserLoading = createAction("user/fetchUserLoading");
export const fetchUserError = createAction("user/fetchUserError");

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchUserLoading());
    const { data } = await PRIVATE_API.get("user/all");
    dispatch(fetchUserSuccess(data));
  } catch (e: any) {
    console.log(e);
    dispatch(fetchUserError(e.message));
  }
};
