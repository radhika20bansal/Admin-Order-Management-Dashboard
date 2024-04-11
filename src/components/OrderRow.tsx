import { OrderStatus, formattedDateAndTime } from "../utils";
import { OrdersModel } from "../models/OrdersModel";
import { useNavigate } from "react-router-dom";

interface PropsType {
  order: OrdersModel;
  srno: number;
}

const OrderRow = ({ order, srno }: PropsType) => {
  const navigate = useNavigate();
  const status = OrderStatus(order.orderStatus);

  const {
    formatedDate,
    formatedMonth,
    formatedHours,
    formatedMinutes,
    formatedSeconds,
  } = formattedDateAndTime(order.orderDate);
  
  return (
    <tr
      className="cursor-pointer"
      onClick={() => {
        navigate(`/orders/${order.orderId}`);
      }}
    >
      <td className="px-5">
        <p>{srno}.</p>
      </td>
      <td className="px-2 py-4">
        <p className="mb-4">
          {formatedDate}/{formatedMonth}/{order.orderDate.getFullYear()}
        </p>
        <p className="text-xs">
          {formatedHours} : {formatedMinutes} : {formatedSeconds}
        </p>
      </td>
      <td>{order.orderId}</td>
      <td className="px-2">
        <span>{order.machineName}</span>
        <span className="text-gray-400 ml-1">({order.machineCode})</span>
      </td>
      <td className="px-2">{order.customerName}</td>
      <td className="px-2">{order.contactNumber}</td>
      <td className="px-2">Rs. {order.totalAmount}</td>
      <td>
        <span className={status.styles}>{status.label}</span>
      </td>
    </tr>
  );
};

export default OrderRow;
