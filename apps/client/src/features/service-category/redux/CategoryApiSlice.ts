import { apiSlice } from "../../../redux/customFetchBase";

export const CategoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: "/categories",
        method: "POST",
        body: categoryData,
      }),
    }),
    getAllCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryById: builder.query({
      query: (categoryId) => `/categories/${categoryId}`,
    }),
    updateCategory: builder.mutation({
      query: ({ categoryId, categoryData }) => ({
        url: `/categories/${categoryId}`,
        method: "PUT",
        body: categoryData,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
      }),
    }),
    getAllTrashedCategories: builder.query({
      query: () => "/categories/trash",
    }),
  }),
});

export const { 
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryApiSlice;
