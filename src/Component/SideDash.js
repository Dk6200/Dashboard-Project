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

      {/* Sidebar */}
      <div
        className={`bg-gray-800 ${
          isOpen ? "w-40" : "w-12"
        } flex flex-col justify-between items-center fixed top-0 left-0 h-screen transition-all duration-300 z-40`}
      >
        <div
          className={`flex flex-col items-center mt-4 lg:mt-4 sm:mt-2 space-y-6 lg:space-y-8`}
        >
          <img
            src={Logo}
            alt="Logo"
            className={`${
              isOpen ? "w-12 h-12" : "w-8 h-8"
            } rounded-full transition-all duration-300`}
          />
          <div
            className={`flex flex-col items-center ${
              isOpen ? "space-y-12" : "space-y-8"
            }`}
          >
            <IoHomeOutline
              className={`text-white ${isOpen ? "text-3xl" : "text-2xl"} ${
                !isOpen && "mt-4"
              }`}
            />
            <IoBarChartOutline
              className={`text-white ${isOpen ? "text-3xl" : "text-2xl"} ${
                !isOpen && "mt-4"
              }`}
            />
            <CiCalendarDate
              className={`text-white ${isOpen ? "text-3xl" : "text-2xl"} ${
                !isOpen && "mt-4"
              }`}
            />
            <CiFileOn
              className={`text-white ${isOpen ? "text-3xl" : "text-2xl"} ${
                !isOpen && "mt-4"
              }`}
            />
            <FiShoppingBag
              className={`text-white ${isOpen ? "text-3xl" : "text-2xl"} ${
                !isOpen && "mt-4"
              }`}
            />
          </div>
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
