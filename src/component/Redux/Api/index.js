import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3003/api/expansetracker";

export const expanseTrackerApi = createApi({
  reducerPath: "expanseApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getExpanseTrackerData: builder.query({
      query: () => ({
        url: "/getAllExpanseData",
        method: "Get",
      }),
      providesTags: ["GetExpanseData"],
    }),
    addExpanseTrackerData: builder.mutation({
      query: (userInfoPayload) => ({
        url: "/addExpanseData",
        method: "Post",
        body: userInfoPayload,
      }),
      invalidatesTags: ["GetExpanseData"],
    }),
    deleteExpanseTrackerById: builder.mutation({
      query: (expanseId) => ({
        url: `/deleteExpanseById?expanseId=${expanseId}`,
        method: "Delete",
      }),
      invalidatesTags: ["GetExpanseData"],
    }),
  }),
});

export const {
  useGetExpanseTrackerDataQuery,
  useAddExpanseTrackerDataMutation,
  useDeleteExpanseTrackerByIdMutation,
} = expanseTrackerApi;
