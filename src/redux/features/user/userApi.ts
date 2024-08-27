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
    }),
  }),
});

export const { useGetMeQuery } = userApi;
