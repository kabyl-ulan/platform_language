import { createReducer } from "@reduxjs/toolkit";

import { fetchIdCategory, fetchIdSubCategory } from "./action";
import { IHelpLocalState } from "./interfaces";

const initialState: IHelpLocalState = {
  idCategory: 0,
  idPodCategory: 0,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchIdCategory, (state, { payload }): IHelpLocalState => {
    return { ...state, idCategory: payload ? payload : 0, idPodCategory: 0 };
  });
  builder.addCase(fetchIdSubCategory, (state, { payload }): IHelpLocalState => {
    return { ...state, idPodCategory: payload ? payload : 0 };
  });
});
