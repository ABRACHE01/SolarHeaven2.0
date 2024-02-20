import { apiSlice } from "../../../redux/customFetchBase";

export const CustomerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: (customerData) => ({
        url: "/customers",
        method: "POST",
        body: customerData,
      }),
    }),
    getAllCustomers: builder.query({
      query: () => "/customers",
    }),
    getCustomerById: builder.query({
      query: (customerId) => `/customers/${customerId}`,
    }),
    getAllTrashedCustomers: builder.query({
      query: () => "/customers/trash",
    }),
    updateCustomer: builder.mutation({
      query: ({ customerId, customerData }) => ({
        url: `/customers/${customerId}`,
        method: "PUT",
        body: customerData,
      }),
    }),
    deleteCustomer: builder.mutation({
      query: (customerId) => ({
        url: `/customers/${customerId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { 
  useCreateCustomerMutation,
  useGetAllCustomersQuery,
  useGetCustomerByIdQuery,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
  useGetAllTrashedCustomersQuery,
} = CustomerApiSlice;
