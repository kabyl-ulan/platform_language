import { useAppSelector } from "../store";

export const useUsers = () => {
  return useAppSelector((state) => state.users);
};
