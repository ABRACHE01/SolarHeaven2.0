import { apiSlice } from "../../../redux/customFetchBase";

export const DepartmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (departmentData) => ({
        url: "/departments",
        method: "POST",
        body: departmentData,
      }),
    }),
    getAllDepartments: builder.query({
      query: () => "/departments",
    }),
    getDepartmentById: builder.query({
      query: (departmentId) => `/departments/${departmentId}`,
    }),
    updateDepartment: builder.mutation({
      query: ({ departmentId, departmentData }) => ({
        url: `/departments/${departmentId}`,
        method: "PUT",
        body: departmentData,
      }),
    }),
    deleteDepartment: builder.mutation({
      query: (departmentId) => ({
        url: `/departments/${departmentId}`,
        method: "DELETE",
      }),
    }),
    getAllTrashedDepartments: builder.query({
      query: () => "/departments/trash",
    }),
  }),
});

export const { 
  useCreateDepartmentMutation,
  useGetAllDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = DepartmentApiSlice;
