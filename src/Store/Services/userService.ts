import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserCredentials {
  email: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/users`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials: UserCredentials) => ({
        url: "/",
        method: "POST",
        body: credentials,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials: UserCredentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
