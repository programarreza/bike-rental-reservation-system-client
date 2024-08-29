import { baseApi } from "../../api/baseApi";

export const rentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRent: builder.mutation({
      query: (rentInfo) => ({
        url: "/rentals",
        method: "POST",
        body: rentInfo,
      }),
    }),
  }),
});

export const { useCreateRentMutation } = rentApi;
