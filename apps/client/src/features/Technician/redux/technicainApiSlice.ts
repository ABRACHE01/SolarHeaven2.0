import { apiSlice } from "../../../redux/customFetchBase";

export const TechnicianSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTechnician: builder.mutation({
      query: (technicianData) => ({
        url: "/technicians",
        method: "POST",
        body: technicianData,
      }),
    }),
    getAllTechnicians: builder.query({
      query: () => "/technicians",
    }),
    getTechnicianById: builder.query({
      query: (technicianId) => `/technicians/${technicianId}`,
    }),
    updateTechnician: builder.mutation({
      query: ({ technicianId, technicianData }) => ({
        url: `/technicians/${technicianId}`,
        method: "PUT",
        body: technicianData,
      }),
    }),
    deleteTechnician: builder.mutation({
      query: (technicianId) => ({
        url: `/technicians/${technicianId}`,
        method: "DELETE",
      }),
    }),
    getAllTrashedTechnicians: builder.query({
      query: () => "/technicians/trash",
    }),
  }),
});

export const { 
  useCreateTechnicianMutation,
  useGetAllTechniciansQuery,
  useGetTechnicianByIdQuery,
  useUpdateTechnicianMutation,
  useDeleteTechnicianMutation,
  useGetAllTrashedTechniciansQuery,
} = TechnicianSlice;
