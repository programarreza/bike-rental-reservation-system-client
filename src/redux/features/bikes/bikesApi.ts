import { baseApi } from "../../api/baseApi";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bikes",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response) => {
		console.log({response})
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllBikesQuery } = bikesApi;
