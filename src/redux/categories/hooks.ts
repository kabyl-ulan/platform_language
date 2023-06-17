import { useAppSelector } from "../store";

export const useCategories = () => {
  return useAppSelector((state) => state.categories);
};
