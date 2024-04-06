import React from "react";
import ProfileHeader from "../common-components/ProfileHeader";
import { CiSearch } from "react-icons/ci";
import { AiOutlineFilePdf } from "react-icons/ai";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import OrdersList from "./OrdersList";

const OrdersComponent = () => {
  const exportOptionBar = (
    <div className="flex items-center justify-between m-4 py-4 pr-6">
      <div className="border-2 flex rounded-md p-2 w-60 mr-5 items-center justify-center bg-white">
        <CiSearch size={"20px"} color="grey" />
        <input type="search" placeholder="Search" className="ml-2" />
      </div>
      <div className="flex items-center">
        <span className="flex items-center justify-center mr-6 w-9 h-9 rounded-md border-2 border-gray-400">
          <PiMicrosoftExcelLogo size={"24px"} />
        </span>
        <span className="flex items-center justify-center w-9 h-9 rounded-md border-2 border-gray-400">
          <AiOutlineFilePdf size={"24px"} />
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full border border-red-500">
      <ProfileHeader />
      {exportOptionBar}
      <OrdersList />
    </div>
  );
};

export default OrdersComponent;
