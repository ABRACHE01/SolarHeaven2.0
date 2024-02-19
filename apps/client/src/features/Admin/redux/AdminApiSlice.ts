import { apiSlice } from "../../../redux/customFetchBase";

export const AdminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createAdmin: builder.mutation({
      query: (adminData) => ({
        url: "/administrators",
        method: "POST",
        body: adminData,
      }),
    }),
    getAllAdmins: builder.query({
      query: () => "/administrators/",
    }),
    getAllTrashedAdmins: builder.query({
      query: () => "/administrators/trash",
    }),
    getAdminbyId: builder.query({
      query: (adminId : string) => `/administrators/${adminId}`,
    }),
    updateAdmin: builder.mutation({
      query: ({ adminId, adminData }) => ({
        url: `/administrators/${adminId}`,
        method: "PUT",
        body: adminData,
      }),
    }),
    deleteAdmin:builder.mutation({
      query: (adminId : string) => ({
        url: `/administrators/${adminId}`,
        method: "DELETE",
      }),
    }),
    
  }),
});

export const { 
  useGetAllAdminsQuery,
  useGetAdminbyIdQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useUpdateAdminMutation,
  useGetAllTrashedAdminsQuery,
 } =
AdminApiSlice;