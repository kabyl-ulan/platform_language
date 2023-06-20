import { createAction } from "@reduxjs/toolkit";

//local
import { AppDispatch } from "../store";
import PRIVATE_API, { PUBLIC_API } from "../../api/api";
import { InputsCourse } from "./interfaces";

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

export const addCourse =
  (course: InputsCourse, navigate: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchCoursesLoading());
      await PRIVATE_API.post("course/add", { ...course });
      navigate("/admin/courses");
    } catch (e: any) {
      console.log(e);
      dispatch(fetchCoursesError(e.message));
    }
  };

export const deleteCourse = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchCoursesLoading());
    const { data } = await PRIVATE_API.delete(`course/${id}`);
    dispatch(fetchCoursesSuccess(data));
  } catch (e: any) {
    console.log(e);
    dispatch(fetchCoursesError(e.message));
  }
};
