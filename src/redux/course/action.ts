import { createAction } from "@reduxjs/toolkit";

//local
import { AppDispatch } from "../store";
import { PUBLIC_API } from "../../api/api";

export const fetchCoursesLoading = createAction("courses/fetchCoursesLoading");
export const fetchCoursesSuccess = createAction("courses/fetchCoursesSuccess");
export const fetchCoursesError = createAction("courses/fetchCoursesError");

export const getAllCourseById =
  (id: number, page: number, size: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchCoursesLoading());
      const { data } = await PUBLIC_API.get(
        `course/get-all/${id}?page=${page}&size=${size}`
      );
      dispatch(fetchCoursesSuccess(data));
    } catch (e: any) {
      console.log(e);
      dispatch(fetchCoursesError(e.message));
    }
  };
