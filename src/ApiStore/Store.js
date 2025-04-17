import { configureStore } from "@reduxjs/toolkit";
import api from "./Api";

const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddlewear) =>
    getDefaultMiddlewear().concat(api.middleware),
});

export default store;
