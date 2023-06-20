import { createReducer } from "@reduxjs/toolkit";
import { ICourseState } from "./interfaces";
import {
  fetchCoursesError,
  fetchCoursesLoading,
  fetchCoursesSuccess,
} from "./action";

const initialState = {
  isLoading: false,
  courses: {
    content: [],
    totalElements: 0,
    totalPages: 0,
  },
  error: "",
} as ICourseState;

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchCoursesLoading, (state): ICourseState => {
    return { ...state, isLoading: true };
  });
  builder.addCase(fetchCoursesSuccess, (state, { payload }): ICourseState => {
    return {
      ...state,
      courses: payload ? payload : state.courses,
      isLoading: false,
      error: "",
    };
  });
  builder.addCase(fetchCoursesError, (state, { payload }) => {
    return {
      ...state,
      error: payload ? payload : state.error,
      isLoading: false,
      courses: state.courses,
    };
  });
});
