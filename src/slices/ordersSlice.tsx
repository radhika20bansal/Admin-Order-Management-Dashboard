import { createSlice } from "@reduxjs/toolkit";
import { ordersData } from "../assets/data/ordersData";
import { OrdersModel } from "../models/OrdersModel";

const initialState: any = {
  filteredOrders:
    JSON.parse(sessionStorage.getItem("filteredOrders") ?? "") || ordersData,
  singleOrder:
    JSON.parse(sessionStorage.getItem("singleOrder") ?? "") || ordersData,
  error: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    singleOrder(state, action) {
      try {
        const oneOrder = state.filteredOrders.filter(
          (order: OrdersModel) => order.orderId === action.payload
        );
        state.singleOrder = oneOrder;
        const savedState = JSON.stringify(oneOrder);
        sessionStorage.setItem("singleOrder", savedState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { singleOrder } = orderSlice.actions;
export default orderSlice.reducer;
