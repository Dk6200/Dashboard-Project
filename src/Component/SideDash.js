import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../Assets/85.jpg";

function SideDash() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl focus:outline-none"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 ${
          isOpen ? "w-40" : "w-16"
        } flex flex-col justify-between items-center fixed top-0 left-0 h-screen transition-all duration-300 z-40`}
      >
        <div className="flex flex-col space-y-8 mt-4 items-center">
          <img
            src={Logo}
            alt="Logo"
            className={`${
              isOpen ? "w-12 h-12" : "w-8 h-8"
            } rounded-full transition-all duration-300`}
          />
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

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default SideDash;
