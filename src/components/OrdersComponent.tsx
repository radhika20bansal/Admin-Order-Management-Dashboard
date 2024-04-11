import ProfileHeader from "../common-components/ProfileHeader";
import { CiSearch } from "react-icons/ci";
import OrdersList from "./OrdersList";
import ExportOptions from "../common-components/ExportOptions";

const OrdersComponent = () => {
  const exportOptionBar = (
    <div className="flex items-center justify-between m-4 py-4 pr-6">
      <div className="border-2 flex rounded-md p-2 w-60 mr-5 items-center justify-center bg-white">
        <CiSearch size={"20px"} color="grey" />
        <input type="search" placeholder="Search" className="ml-2 outline-none" />
      </div>
      <ExportOptions/>
    </div>
  );

  return (
    <div className="w-full border border-red-500">
      <ProfileHeader heading={'All Orders'} link={'All Orders'} />
      {exportOptionBar}
      <OrdersList />
    </div>
  );
};

export default OrdersComponent;
