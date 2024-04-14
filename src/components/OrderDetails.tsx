import { useParams } from "react-router-dom";
import { ordersData } from "../assets/data/ordersData";
import ProfileHeader from "../common-components/ProfileHeader";
import ExportOptions from "../common-components/ExportOptions";
import { LuUndo } from "react-icons/lu";
import { OrderStatus } from "../utils";
import moment from "moment";
import { useState } from "react";
import ButtonComponent from "../common-components/ButtonComponent";

const OrderDetails = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { orderId } = useParams();
  const order = ordersData.find((order) => order.orderId === orderId) ?? null;
  const orderStatus = order && OrderStatus(order.orderStatus);
  const formattedDateAndTime = moment(order?.orderDate).format(
    "DD/MM/YYYY HH:mm:ss A"
  );

  const exportOptionBar = (
    <div className="flex items-center justify-end m-4 py-4 pr-6">
      <button
        className={
          isDisabled
            ? "flex items-center text-white bg-gray-400 rounded-md px-4 py-2 font-semibold mr-6"
            : "flex items-center text-white bg-blue-500 rounded-md px-4 py-2 font-semibold mr-6"
        }
        disabled={isDisabled}
        onClick={() => setIsDisabled(true)}
      >
        <LuUndo className="mr-4" />
        Refund Complete Order
      </button>
      <ExportOptions />
    </div>
  );

  const orderAndCustomerSummary = (
    <div className="bg-white py-4 px-6 w-1/3 mx-4 mt-2 mb-4 shadow rounded-md">
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-blue-500">{orderId}</span>
        <span className={`${orderStatus?.styles}`}>{orderStatus?.label}</span>
      </div>
      <h2 className="uppercase font-medium text-gray-500 my-2 text-left">
        Basic Information
      </h2>
      <div className="flex items-start justify-between mb-7 text-left text-sm">
        <div className="w-40">
          <p className="text-gray-500 mb-2">Date and Time</p>
          <p className="font-medium">{formattedDateAndTime}</p>
        </div>
        <div className="w-36">
          <p className="text-gray-500 mb-2">Machine</p>
          <p className="font-medium">
            {order?.machineName}{" "}
            <span className="text-gray-500">(${order?.machineCode})</span>
          </p>
        </div>
      </div>
      <h2 className="uppercase font-medium text-gray-500 my-2 text-left">
        Order Summary
      </h2>
      <div className="flex items-start justify-between mb-7 text-left text-sm">
        <div className="w-40">
          <p className="text-gray-500 mb-2">Payment ID</p>
          <p className="font-medium">{order?.paymentDetails.paymentId}</p>
        </div>
        <div className="w-36">
          <p className="text-gray-500 mb-2">Total Amount</p>
          <p className="font-medium">Rs. {order?.totalAmount}</p>
        </div>
      </div>
      <h2 className="uppercase font-medium text-gray-500 my-2 text-left">
        Customer Information
      </h2>
      <div className="flex flex-wrap items-start justify-between mb-7 text-left text-sm">
        <div className="w-40 mb-2">
          <p className="text-gray-500 mb-2">Name</p>
          <p className="font-medium">{order?.customerName}</p>
        </div>
        <div className="w-36 mb-2">
          <p className="text-gray-500 mb-2">Contact Number</p>
          <p className="font-medium">{order?.contactNumber}</p>
        </div>
        <div className="w-36">
          <p className="text-gray-500 mb-2">Email</p>
          <p className="font-medium">{order?.customerEmail}</p>
        </div>
      </div>
      <h2 className="uppercase font-medium text-gray-500 my-2 text-left">
        Refund Information
      </h2>
      <div className="flex flex-wrap items-start justify-between mb-7 text-left text-sm">
        <div className="w-40">
          <p className="text-gray-500 mb-2">Refund Transaction ID</p>
          <p className="font-medium">{order?.paymentDetails.refundId}</p>
        </div>
      </div>
    </div>
  );
  const orderDetails = (
    <div className="bg-white w-3/5 py-4 px-6 mx-4 mt-2 mb-4 shadow rounded-md">
      <h2 className="uppercase font-medium text-gray-500 my-2 text-left">
        Order Details
      </h2>
      <table className="table-fixed w-full my-4 py-4 px-2 text-sm text-left">
        <thead className="text-blue-500 font-semibold">
          <tr>
            <td className="px-2 w-12">ID</td>
            <td className="px-2 w-36">Drink Name</td>
            <td className="px-1 w-28">Customization</td>
            <td className="py-4 px-2 w-16">Amount</td>
            <td className="px-2 w-40">Drink Status</td>
            <td className="px-2 w-20">Action</td>
          </tr>
        </thead>
        <tbody>
          {order?.orderDetails && order.orderDetails.length > 0
            ? order.orderDetails.map((order) => {
                const drinkStatus = OrderStatus(order.status);

                return (
                  <tr key={order.id}>
                    <td className="px-2 py-4">{order.id}</td>
                    <td className="px-2 py-4">{order.name}</td>
                    <td className="px-2 py-4">{order.customization}</td>
                    <td className="px-2 py-4">Rs. {order.amount}</td>
                    <td className="px-2 py-4">
                      <span
                        className={`${drinkStatus.styles} py-1 px-2 text-xs`}
                      >
                        {drinkStatus.label}
                      </span>
                    </td>
                    <td className="pl-2 py-4">
                      <ButtonComponent
                        disabled={
                          isDisabled
                            ? isDisabled
                            : drinkStatus.label.startsWith("Refund")
                            ? true
                            : false
                        }
                      >
                        Refund
                      </ButtonComponent>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
  return (
    <div className="w-full border border-red-500">
      <ProfileHeader heading={`${orderId}`} link={`All Orders / ${orderId}`} />
      {exportOptionBar}
      <div className="flex items-start justify-between">
        {orderAndCustomerSummary}
        {orderDetails}
      </div>
    </div>
  );
};

export default OrderDetails;
