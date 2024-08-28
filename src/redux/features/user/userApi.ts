import { baseApi } from "../../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: (email) => {
        return {
          url: `/users/me?email=${email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    updateMe: builder.mutation({
      query: (data) => {
        return {
          url: `/users/me`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateMeMutation } = userApi;
