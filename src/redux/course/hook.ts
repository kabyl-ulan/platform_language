import { useAppSelector } from "../store";

export const useCourses = () => {
  return useAppSelector((state) => state.courses);
};
