import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../slices/ordersSlice";

export const store = configureStore({
  reducer: {
    order: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
