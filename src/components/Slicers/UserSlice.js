import api from "../../ApiStore/Api";
import { createSlice } from "@reduxjs/toolkit";

// Creating an API for user login and fetching user account
const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (login) => ({
        url: "/users/login",
        method: "POST",
        body: login,
      }),
      invalidatesTags: ["User"],
    }),
    getAccount: builder.query({
      query: () => ({
        url: `/users/me`,
        method: `GET`,
      }),
      providesTags: ["User"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  localStorage.setItem("token", payload.token);
};

const LoginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, storeToken);
  },
});

export default LoginSlice.reducer;

export const { useLoginMutation, useGetAccountQuery } = userApi;
