import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ADDRESS } from "../api/api";

export interface ICategoryAll {
  id: number;
  categoryName: string;
  subCategoryResponses: ICategoryAll[];
}

// Create an instance of the API
export const getAllCategoriesApi = createApi({
  reducerPath: "getAllCategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
  endpoints: (builder) => ({
    // Define your category endpoint
    getCategoryList: builder.query<ICategoryAll[], void>({
      query: () => "categories/get-all-categories-with-sub-categories",
    }),
  }),
});

// Export hooks for using the API
export const { useGetCategoryListQuery } = getAllCategoriesApi;
