export interface OrdersModel {
    orderId: string,
    machineName: string,
    machineCode: string,
    customerName: string,
    contactNumber: string,
    orderDate: Date,
    orderStatus: string,
    totalAmount: number,
    paymentDetails: PaymentDetails,
    customerEmail: string
}

export interface PaymentDetails{
    paymentId: string,
    refundId: string,
}