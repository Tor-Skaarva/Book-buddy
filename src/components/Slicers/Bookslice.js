import api from "../../ApiStore/Api";
import { createSlice } from "@reduxjs/toolkit";

// Injecting endpoints into the main api instance
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),
  }),
});

// a slice to hold book-related state
const bookSlice = createSlice({
  name: "books",
  initialState: {},
  reducers: {},
});

export default bookSlice.reducer;
export const { useGetBooksQuery, useGetBookByIdQuery } = bookApi;
