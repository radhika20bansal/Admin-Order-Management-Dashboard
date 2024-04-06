import React from "react";
import { FiHome } from "react-icons/fi";
import { TbMap2 } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiForkKnife } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { TbDiscount2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const logo = require("../assets/images/basillogo.png");

const LeftMenu = () => {
  return (
    <div className="w-20 p-4 h-screen shadow-md shadow-gray-300 rounded-md bg-white">
      <div>
        <img src={logo} className="w-9 h-9 rounded-full" />
        <div className="my-16 flex flex-col items-center">
          <Link to="" className="mb-9 block">
            <FiHome size={"24px"} />
          </Link>
          <Link to="" className="mb-9 block">
            <TbMap2 size={"24px"} />
          </Link>
          <Link to="" className="mb-9 block bg-blue-500 p-2 rounded-md">
            <TbBuildingWarehouse size={"24px"} color="white" />
          </Link>
          <Link to="" className="mb-9 block">
            <GoPeople size={"24px"} />
          </Link>
          <Link to="" className="mb-9 block">
            <PiForkKnife size={"24px"} />
          </Link>
          <Link to="" className="mb-9 block">
            <PiNewspaperClipping size={"24px"} />
          </Link>
          <Link to="">
            <TbDiscount2 size={"24px"} />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="" className="mb-9 block">
            <IoSettingsOutline size={"24px"} />
          </Link>
          <Link to="">
            <LiaFileExportSolid size={"24px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
