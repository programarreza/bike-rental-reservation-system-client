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

    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: (args) => {
        return {
          url: `/users/${args.id}`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["user"],
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateMeMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
