import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Goals from "../Assets/2.png";
import Order from "../Assets/3.jpg";
import Menu from "../Assets/4.jpg";

function Goal() {
  return (
    <div className="text-white p-4">
      {/* Goal Section */}
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-red-800 rounded-full p-2">
            <img
              src={Goals}
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Goals"
            />
          </div>
          <p className="text-sm">Goals</p>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <IoIosArrowForward className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-900 rounded-full p-2">
            <img
              src={Order}
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Menu"
            />
          </div>
          <p className="text-sm">Menu</p>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <IoIosArrowForward className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Order Section */}
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-900 rounded-full p-2">
            <img
              src={Menu}
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Order"
            />
          </div>
          <p className="text-sm">Order</p>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <IoIosArrowForward className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Goal;
