import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../slices/ordersSlice";

export const store = configureStore({
  reducer: {
    order: ordersReducer
  },
});
