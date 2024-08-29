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

    getReturnRent: builder.query({
      query: () => {
        return {
          url: `/rentals`,
          method: "GET",
        };
      },
      providesTags: ["returnRent"],
    }),

    addReturnBike: builder.mutation({
      query: (id) => {
        return {
          url: `/rentals/${id}/return`,
          method: "PUT",
        };
      },
      invalidatesTags: ["returnRent"],
    }),
  }),
});

export const {
  useCreateRentMutation,
  useMyRentQuery,
  useGetReturnRentQuery,
  useAddReturnBikeMutation,
} = rentApi;
