import { useAppSelector } from "../store";

export const useHelpLocal = () => {
  return useAppSelector((state) => state.helpLocal);
};
