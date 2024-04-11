import { useParams } from "react-router-dom";
import { ordersData } from "../assets/data/ordersData";
import ProfileHeader from "../common-components/ProfileHeader";
import ExportOptions from "../common-components/ExportOptions";
import { LuUndo } from "react-icons/lu";
import { OrderStatus, formattedDateAndTime } from "../utils";
import moment from "moment";

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = ordersData.find((order) => order.orderId === orderId) ?? null;
  console.log("matched order", order);
  const status = order && OrderStatus(order.orderStatus);
  const formattedDateAndTime = moment(order?.orderDate).format(
    "DD/MM/YYYY HH:mm:ss A"
  );

  const exportOptionBar = (
    <div className=" flex items-center justify-end m-4 py-4 pr-6">
      <button className="flex items-center text-white bg-blue-500 rounded-md px-4 py-2 font-semibold mr-6">
        <LuUndo className="mr-4" />
        Refund Complete Order
      </button>
      <ExportOptions />
    </div>
  );

  const orderAndCustomerSummary = (
    <div className="py-4 px-6 w-1/3 mx-4 mt-2 mb-4 shadow rounded-md">
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-blue-500">{orderId}</span>
        <span className={`${status?.styles}`}>{status?.label}</span>
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
  return (
    <div className="w-full border border-red-500">
      <ProfileHeader heading={`${orderId}`} link={`All Orders / ${orderId}`} />
      {exportOptionBar}
      {orderAndCustomerSummary}
    </div>
  );
};

export default OrderDetails;
