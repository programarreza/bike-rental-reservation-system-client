/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { toast } from "sonner";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

type CustomError = {
  status: number;
  data?: {
    message?: string;
  };
};
// https://bike-rental-reservation-system-server.vercel.app/
const baseQuery = fetchBaseQuery({
  baseUrl: "https://bike-rental-reservation-system-server.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // console.log({ token });

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error as CustomError; // Cast to CustomError

    if (error.status === 404) {
      toast.error(error.data?.message || "Not Found");
    }

    // if (result?.error?.status === 404) {
    //   toast.error(result?.error?.data?.message);
    // }

    if (result?.error?.status === 401) {
      // Send Refresh Token
      console.log("Sending refresh token");

      const res = await fetch(
        "https://bike-rental-reservation-system-server.vercel.app/api/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();
      // console.log(data?.data?.accessToken);
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;

        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["user", "bike", "rent", "returnRent"],
  endpoints: () => ({}),
});
