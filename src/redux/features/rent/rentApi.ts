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

    createPayment: builder.mutation({
      query: (transactionId) => {
        console.log("from api", transactionId)
        return {
          url: "/payments/create-payment",
          method: "POST",
          body: transactionId,
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
  useCreatePaymentMutation,
} = rentApi;
