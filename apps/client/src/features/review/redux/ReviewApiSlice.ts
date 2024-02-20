import { apiSlice } from "../../../redux/customFetchBase";

export const ReviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: "/reviews",
        method: "POST",
        body: reviewData,
      }),
    }),
    getAllReviews: builder.query({
      query: () => "/reviews",
    }),
    getReviewById: builder.query({
      query: (reviewId) => `/reviews/${reviewId}`,
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, reviewData }) => ({
        url: `/reviews/${reviewId}`,
        method: "PUT",
        body: reviewData,
      }),
    }),
    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `/reviews/${reviewId}`,
        method: "DELETE",
      }),
    }),
    getAllTrashedReviews: builder.query({
      query: () => "/reviews/trash",
    }),
  }),
});

export const { 
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllTrashedReviewsQuery,
} = ReviewApiSlice;
