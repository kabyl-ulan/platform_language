export interface ICategory {
  id: number;
  categoryName: string;
  image?: any;
}

export interface ICategoryState {
  isLoading: boolean;
  categories: ICategory[];
  error: string | any;
}

export interface ICategoryAdd {
  parentCategoryId: string;
  categoryName: string;
  file: any;
}
