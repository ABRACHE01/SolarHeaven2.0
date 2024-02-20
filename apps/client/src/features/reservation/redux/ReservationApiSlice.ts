import { apiSlice } from "../../../redux/customFetchBase";

export const ReservationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReservation: builder.mutation({
      query: (reservationData) => ({
        url: "/reservations",
        method: "POST",
        body: reservationData,
      }),
    }),
    getAllReservations: builder.query({
      query: () => "/reservations",
    }),
    getReservationById: builder.query({
      query: (reservationId) => `/reservations/${reservationId}`,
    }),
    updateReservation: builder.mutation({
      query: ({ reservationId, reservationData }) => ({
        url: `/reservations/${reservationId}`,
        method: "PUT",
        body: reservationData,
      }),
    }),
    deleteReservation: builder.mutation({
      query: (reservationId) => ({
        url: `/reservations/${reservationId}`,
        method: "DELETE",
      }),
    }),
    getAllTrashedReservations: builder.query({
      query: () => "/reservations/trash",
    }),
  }),
});

export const { 
  useCreateReservationMutation,
  useGetAllReservationsQuery,
  useGetReservationByIdQuery,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
  useGetAllTrashedReservationsQuery,
} = ReservationApiSlice;
