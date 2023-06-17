import { createReducer } from "@reduxjs/toolkit";

//local
import { IUsersState } from "./interfaces";
import { fetchUserError, fetchUserLoading, fetchUserSuccess } from "./action";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
} as IUsersState;

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchUserLoading, (state) => {
    return { ...state, isLoading: true };
  });
  builder.addCase(fetchUserSuccess, (state, { payload }): IUsersState => {
    return {
      ...state,
      users: payload ? payload : [],
      error: "",
      isLoading: false,
    };
  });
  builder.addCase(fetchUserError, (state, { payload }): IUsersState => {
    return { ...state, error: payload, users: [], isLoading: false };
  });
});
