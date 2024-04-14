export interface OrdersModel {
  orderId: string;
  machineName: string;
  machineCode: string;
  customerName: string;
  contactNumber: string;
  orderDate: Date;
  orderStatus: string;
  totalAmount: number;
  paymentDetails: PaymentDetails;
  customerEmail: string;
  orderDetails: OrderDetails[];
}

export interface PaymentDetails {
  paymentId: string;
  refundId: string | null;
  isCompleteOrderRefunded: boolean;
}

export interface OrderDetails {
  id: string;
  name: string;
  customization: string;
  amount: number;
  status: string;
}
