import { apiSlice } from "../../../redux/customFetchBase";

export const ServiceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceData) => ({
        url: "/services", // Modified endpoint URL
        method: "POST",
        body: serviceData,
      }),
    }),
    getAllServices: builder.query({
      query: () => "/services", // Modified endpoint URL
    }),
    getServiceById: builder.query({
      query: (serviceId) => `/services/${serviceId}`, // Modified endpoint URL
    }),
    updateService: builder.mutation({
      query: ({ serviceId, serviceData }) => ({
        url: `/services/${serviceId}`, // Modified endpoint URL
        method: "PUT",
        body: serviceData,
      }),
    }),
    deleteService: builder.mutation({
      query: (serviceId) => ({
        url: `/services/${serviceId}`, // Modified endpoint URL
        method: "DELETE",
      }),
    }),
    getAllTrashedServices: builder.query({
      query: () => "/services/trash", // Modified endpoint URL
    }),
  }),
});

export const { 
  useCreateServiceMutation, // Modified variable names
  useGetAllServicesQuery, // Modified variable names
  useGetServiceByIdQuery, // Modified variable names
  useUpdateServiceMutation, // Modified variable names
  useDeleteServiceMutation, // Modified variable names
} = ServiceApiSlice;
