import { apiSlice } from "../../../redux/customFetchBase";

export const DashApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getDepartments: builder.query({
      query: () => "/departments/all",
    }),
    
  }),
});

export const { useGetDepartmentsQuery } =
DashApiSlice;