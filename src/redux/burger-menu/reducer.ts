import { createReducer, PayloadAction } from "@reduxjs/toolkit";

//local
import { openOrClose } from "./action";
import { StateBurger } from "./interfaces";

const initialState: StateBurger = {
  isOpen: false,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(openOrClose, (state, action: PayloadAction<StateBurger>) => {
    return {
      ...state,
      isOpen: action.payload.isOpen,
    };
  });
});
