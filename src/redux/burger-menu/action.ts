import { createAction } from "@reduxjs/toolkit";
import { StateBurger } from "./interfaces";

export const openOrClose = createAction<StateBurger>("burger-menu/openOrClose");
