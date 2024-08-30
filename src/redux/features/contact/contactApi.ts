import { baseApi } from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllContactMessage: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();

    //     if (args) {
    //       args.forEach((item : TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/contacts",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),

    createContactMessage: builder.mutation({
      query: (contactInfo) => ({
        url: "/contacts/create-message",
        method: "POST",
        body: contactInfo,
      }),
    }),
  }),
});

export const { useCreateContactMessageMutation } =
  contactApi;
