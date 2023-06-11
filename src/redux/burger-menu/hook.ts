import { useSelector } from "react-redux";

//local
import { RootState } from "../store";
import { StateBurger } from "./interfaces";

export const useBurgerMenu = (): StateBurger => {
  return useSelector((state: RootState) => state.openBurger);
};
