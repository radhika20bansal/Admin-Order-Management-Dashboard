import React from "react";
import { Link } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
const profile = require("../assets/images/profile.jpg");

interface PropsType{
  heading: string;
  link: string;
}

const ProfileHeader = ({heading, link}: PropsType) => {
  return (
    <div className="flex items-center justify-between px-8 py-3 border mx-4 rounded-b-lg rounded-bl-lg shadow bg-white">
      <div className="text-left">
        <h1 className="text-xl font-semibold">{heading}</h1>
        <Link to={"/"} className="text-sm text-blue-600">
          {link}
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="border-2 flex rounded-md px-2 py-1 w-60 mr-5 items-center justify-center">
          <CiSearch size={"20px"} color="grey" />
          <input type="search" placeholder="Search" className="ml-2" />
        </div>
        <VscBellDot size={"24px"} color="#545555" />
        <img src={profile} alt="" className="w-9 h-9 ml-5 rounded-full" />
      </div>
    </div>
  );
};

export default ProfileHeader;
