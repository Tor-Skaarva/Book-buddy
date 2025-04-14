import api from "../../ApiStore/Api";

/* creating an Api for registered user */
const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...login }) => ({
        url: "/users",
        method: "POST",
        body: login,
      }),
      invalidateTags: ["User"],
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
