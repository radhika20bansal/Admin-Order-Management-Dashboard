import React from "react";
import { orderConstants } from "../constants";
import { ordersData as orders } from "../assets/data/ordersData";
import { formattedDateAndTime } from "../utils";

const OrdersList = () => {
  const detailsBar = (
    <div className="w-full px-2 py-4 flex items-center justify-evenly rounded-md text-xs bg-white shadow">
      <p>
        <span className="font-medium mr-1">Machines:</span>
        <span>6</span>
      </p>
      <p>
        <span className="font-medium mr-1">Orders:</span>
        <span>28</span>
      </p>
      <p>
        <span className="font-medium mr-1">Customers:</span>
        <span>18</span>
      </p>
      <p>
        <span className="font-medium mr-1">Drinks:</span>
        <span>15</span>
      </p>
      <p>
        <span className="font-medium mr-1">Total Amount:</span>
        <span>Rs.25000</span>
      </p>
      <p>
        <span className="font-medium mr-1">Refund Initiated:</span>
        <span>3</span>
      </p>
    </div>
  );

  const StatusStyles = (orderStatus: string) => {
    const status =
      Object.entries(orderConstants.status).find(
        (pair) =>
          pair[1].value.toLocaleLowerCase() === orderStatus.toLocaleLowerCase()
      )?.[1] ?? orderConstants.status.pending;
    return status;
  };
  
  const ordersTable = (
    <table className="table-fixed w-full mt-4 rounded-md shadow py-4 px-2 text-sm text-left bg-white">
      <thead className="text-blue-500 font-semibold">
        <tr>
          <td className="pl-2 w-12">S.No.</td>
          <td className="px-2 w-28">Date</td>
          <td className="px-1 w-20">Order ID</td>
          <td className="py-4 px-2 w-28">
            Machine <br /> Name
          </td>
          <td className="px-2 w-24">
            Customer <br /> Name
          </td>
          <td className="px-2 w-24">
            Contact
            <br />
            Number
          </td>
          <td className="px-2 w-24">
            Total <br /> Amount
          </td>
          <td className="px-2 w-40">Status</td>
        </tr>
      </thead>
      <tbody>
        {orders && orders.length > 0
          ? orders.map((order, index) => {
              const status = StatusStyles(order.orderStatus);
              const {
                formatedDate,
                formatedMonth,
                formatedHours,
                formatedMinutes,
                formatedSeconds,
              } = formattedDateAndTime(order.orderDate);
              
              return (
                <tr key={order.orderId}>
                  <td className="px-2">
                    <p>{index + 1}.</p>
                  </td>
                  <td className="px-2 py-4">
                    <p className="mb-4">
                      {formatedDate}/{formatedMonth}/
                      {order.orderDate.getFullYear()}
                    </p>
                    <p className="text-xs">
                      {formatedHours} : {formatedMinutes} : {formatedSeconds}
                    </p>
                  </td>
                  <td>{order.orderId}</td>
                  <td className="px-2">
                    <span>{order.machineName}</span>
                    <span className="text-gray-400 ml-1">
                      ({order.machineCode})
                    </span>
                  </td>
                  <td className="px-2">{order.customerName}</td>
                  <td className="px-2">{order.contactNumber}</td>
                  <td className="px-2">Rs. {order.totalAmount}</td>
                  <td>
                    <span className={status.styles}>{status.label}</span>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
  return (
    <div className="w-3/4 p-4 pt-0 border border-red-500">
      {detailsBar}
      {ordersTable}
    </div>
  );
};

export default OrdersList;
