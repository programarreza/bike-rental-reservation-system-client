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

    myRent: builder.query({
      query: (isPaid) => {
        console.log("from api", isPaid);
        return {
          url: `/rentals/me?isPaid=${isPaid}`,
          method: "GET",
        };
      },
      providesTags: ["rent"],
    }),
  }),
});

export const { useCreateRentMutation, useMyRentQuery } = rentApi;
