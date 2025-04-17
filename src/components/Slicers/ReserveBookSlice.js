import api from "../../ApiStore/Api";
import { createSlice } from "@reduxjs/toolkit";

// Inject the book reservation mutation into the API
const reserveApi = api.injectEndpoints({
  endpoints: (builder) => ({
    reserveBook: builder.mutation({
      query: (reservationDetails) => ({
        url: `/books/reserve`,
        method: `POST`,
        body: reservationDetails,
      }),
    }),
    returnBook: builder.mutation({
      query: (returnDetails) => ({
        url: `/books/return`,
        method: `POST`,
        body: returnDetails,
      }),
    }),
  }),
});

const handleReservationSuccess = (state, { payload }) => {
  console.log("Reservation successful:", payload);
};

const handleReturnSuccess = (state, { payload }) => {
  console.log("Return Succesful", payload);
};

const reserveBookSlice = createSlice({
  name: "reserveBook",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      reserveApi.endpoints.reserveBook.matchFulfilled,
      handleReservationSuccess
    );
    builder.addMatcher(
      reserveApi.endpoints.returnBook.matchFulfilled,
      handleReturnSuccess
    );
  },
});

export default reserveBookSlice.reducer;
// These are called RTK hooks (return token?) and the use part is added to the front the ends are generated
// based on your mutation or query builder statements... functions... const....... based on your builder.
export const { useReserveBookMutation, useReturnBookMutation } = reserveApi;
