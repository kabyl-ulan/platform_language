import { useAppSelector } from "../store";

export const useSubCategories = () => {
  return useAppSelector((store) => store.subCategories);
};
