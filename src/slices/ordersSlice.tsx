import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ordersData } from "../assets/data/ordersData";
import { OrdersModel } from "../models/OrdersModel";

export interface State {
  filteredOrders: OrdersModel[];
  singleOrder: OrdersModel[];
  error: boolean;
}

const filteredOrdersStorage = sessionStorage.getItem("filteredOrders");
const singleOrderStorage = sessionStorage.getItem("singleOrder");

const initialState: State = {
  filteredOrders: filteredOrdersStorage
    ? JSON.parse(filteredOrdersStorage)
    : null || ordersData,
  singleOrder: singleOrderStorage
    ? JSON.parse(singleOrderStorage)
    : null || ordersData,
  error: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    singleOrder: (state: State, action: PayloadAction<string>) => {
      try {
        const oneOrder = state.filteredOrders.filter(
          (order: any) => order.orderId === action.payload
        );
        state.singleOrder = oneOrder;
        const savedState = JSON.stringify(oneOrder);
        sessionStorage.setItem("singleOrder", savedState);
        
      } catch (err) {
        console.log(err);
        state.error = true;
      }
    },
  },
});

export const { singleOrder } = orderSlice.actions;
export default orderSlice.reducer;
