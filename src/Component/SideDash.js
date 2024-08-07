import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Logo from "../Assets/85.jpg";

function SideDash() {
  return (
    <div className="bg-gray-800 w-16 flex flex-col justify-between items-center fixed top-0 left-0 h-screen">
      <div className="flex flex-col space-y-8 mt-4">
        <img src={Logo} alt="Logo" className="w-8 h-8  rounded-full" />
        <IoHomeOutline className="text-white text-2xl" />
        <IoBarChartOutline className="text-white text-2xl" />
        <CiCalendarDate className="text-white text-2xl" />
        <CiFileOn className="text-white text-2xl" />
        <FiShoppingBag className="text-white text-2xl" />
      </div>
      <div className="text-white text-2xl mb-8">
        <AiOutlineLogout />
      </div>
    </div>
  );
}

export default SideDash;
