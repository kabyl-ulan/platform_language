import { ICategory } from "../categories/interfaces";

export interface ISubCategoryState {
  isLoading: boolean;
  subCategories: ICategory[];
  error: string | any;
}
