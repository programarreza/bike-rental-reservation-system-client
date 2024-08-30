import { TBike, TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bikes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bike"],
      transformResponse: (response: TResponseRedux<TBike[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getSingleBike: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TBike>) => {
        return {
          data: response.data,
        };
      },
    }),

    addBike: builder.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bike"],
    }),

    updateBike: builder.mutation({
      query: (bikeInfo) => {
        return {
          url: `/bikes/${bikeInfo.bikeId}`,
          method: "PUT",
          body: bikeInfo.bike,
        };
      },
      invalidatesTags: ["bike"],
    }),

    deleteBike: builder.mutation({
      query: (bikeId) => {
        return {
          url: `/bikes/${bikeId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikesApi;
