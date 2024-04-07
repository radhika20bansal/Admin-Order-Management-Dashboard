import { formattedDateAndTime } from "../utils";
import { orderConstants } from "../constants";
import { OrdersModel } from "../models/OrdersModel";

interface PropsType {
  order: OrdersModel;
  srno: number;
}

const OrderRow = ({ order, srno }: PropsType) => {
  const status =
    Object.entries(orderConstants.status).find(
      (pair) =>
        pair[1].value.toLocaleLowerCase() === order.orderStatus.toLocaleLowerCase()
    )?.[1] ?? orderConstants.status.pending;

  const {
    formatedDate,
    formatedMonth,
    formatedHours,
    formatedMinutes,
    formatedSeconds,
  } = formattedDateAndTime(order.orderDate);

  return (
    <tr>
      <td className="px-2">
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
