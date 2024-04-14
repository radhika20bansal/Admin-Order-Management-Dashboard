import { useMemo, useState } from "react";
import { ordersData as orders } from "../assets/data/ordersData";
import Pagination from "./Pagination";
import OrderRow from "./OrderRow";
import { TiArrowUnsorted } from "react-icons/ti";

const OrdersList = () => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
  const [isOrderIdSelected, setIsOrderIdSelected] = useState<boolean>(false);
  const [isAmountSelected, setIsAmountSelected] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("");
  const dataCount = orders.length;

  const sortedOrders = useMemo(() => {
    const sorted = orders.sort((a: any, b: any) => {
      switch (sortBy) {
        case "date": {
          if (isDateSelected) {
            return a.orderDate - b.orderDate;
          } else {
            return b.orderDate - a.orderDate;
          }
        }
        case "orderId": {
          if (isOrderIdSelected) {
            return a.orderId.localeCompare(b.orderId, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          } else {
            return b.orderId.localeCompare(a.orderId, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          }
        }
        case "amount": {
          if (isAmountSelected) {
            return a.totalAmount - b.totalAmount;
          } else {
            return b.totalAmount - a.totalAmount;
          }
        }
        default:
          return 1;
      }
    });
    return sorted;
  }, [sortBy, isAmountSelected, isDateSelected, isOrderIdSelected]);

  const { firstPageIndex, lastPageIndex, currentPageData } = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    let lastPageIndex = firstPageIndex + pageSize;
    lastPageIndex = lastPageIndex > dataCount ? dataCount : lastPageIndex;
    const currentPageData = sortedOrders.slice(firstPageIndex, lastPageIndex);

    return { firstPageIndex, lastPageIndex, currentPageData };
  }, [
    currentPage,
    pageSize,
    sortBy,
    isAmountSelected,
    isDateSelected,
    isOrderIdSelected,
    dataCount,
  ]);

  let srno = 0;
  srno = srno + firstPageIndex;

  const detailsBar = (
    <div className="w-full px-2 py-4 flex items-center justify-evenly rounded-md text-xs bg-white shadow">
      <p>
        <span className="font-medium mr-1">Machines:</span>
        <span>6</span>
      </p>
      <p>
        <span className="font-medium mr-1">Orders:</span>
        <span>{dataCount}</span>
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
        <span className="font-medium mr-1">Refunds Initiated:</span>
        <span>3</span>
      </p>
    </div>
  );

  const ordersTable = (
    <table className="table-fixed w-full my-4 rounded-md shadow py-4 px-2 text-sm text-left bg-white">
      <thead className="text-blue-500 font-semibold">
        <tr>
          <td className="pl-5 w-14">S.No.</td>
          <td className="px-2 w-24">
            <div className="flex items-center">
              <span className="mr-3">Date</span>
              <span
                id="date"
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                  setSortBy(e.currentTarget.id);
                  setIsDateSelected(!isDateSelected);
                  setIsAmountSelected(false);
                  setIsOrderIdSelected(false);
                }}
              >
                <TiArrowUnsorted cursor={"pointer"} />
              </span>
            </div>
          </td>
          <td className="px-1 w-20">
            <div className="flex items-center">
              <span className="mr-3">
                Order <br /> ID
              </span>
              <span
                id="orderId"
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                  setSortBy(e.currentTarget.id);
                  setIsOrderIdSelected(!isOrderIdSelected);
                  setIsAmountSelected(false);
                  setIsDateSelected(false);
                }}
              >
                <TiArrowUnsorted cursor={"pointer"} />
              </span>
            </div>
          </td>
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
            <div className="flex items-center">
              <span className="mr-3">
                Total <br /> Amount
              </span>
              <span
                id="amount"
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                  setSortBy(e.currentTarget.id);
                  setIsAmountSelected(!isAmountSelected);
                  setIsDateSelected(false);
                  setIsOrderIdSelected(false);
                }}
              >
                <TiArrowUnsorted cursor={"pointer"} />
              </span>
            </div>
          </td>
          <td className="px-2 w-40">Status</td>
        </tr>
      </thead>
      <tbody>
        {currentPageData && currentPageData.length > 0
          ? currentPageData.map((order) => {
              srno = srno + 1;
              return <OrderRow order={order} srno={srno} key={order.orderId} />;
            })
          : null}
      </tbody>
    </table>
  );

  const paginationComponent = (
    <div className="flex items-center justify-between w-full">
      <p className="text-sm font-medium text-gray-700">
        Showing {firstPageIndex + 1} to{" "}
        {pageSize > dataCount ? dataCount : lastPageIndex} of {dataCount}{" "}
        entries
      </p>
      <div>
        <span className="text-sm text-gray-700 font-medium">
          Rows per page:{" "}
        </span>
        <select
          name="size"
          value={pageSize}
          onChange={(e) =>
            setPageSize(
              e.target.value === "DEFAULT" ? 5 : parseInt(e.target.value)
            )
          }
          className="w-11 text-center ml-2 py-1 rounded-md outline-none"
        >
          <option value="DEFAULT">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <Pagination
        currentPage={currentPage}
        dataCount={dataCount}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );

  return (
    <div className="w-3/4 p-4 pt-0">
      {detailsBar}
      {ordersTable}
      {paginationComponent}
    </div>
  );
};

export default OrdersList;
