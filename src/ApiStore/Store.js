import { configureStore } from "@reduxjs/toolkit";
import bookApi from "../components/Slicers/Bookslice";

export default store = configureStore({
  reducer: { [bookApi.reducerPath]: bookApi.reducer },
  middleware: (getDefaultMiddlewear) =>
    getDefaultMiddlewear().concat(api.middleware),
});
