import React from "react";
import Profile from "../Assets/profile.png";
import { AiOutlineMail } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="bg-gray-800 h-[5vh] sm:h-[7vh] md:h-[10vh] w-full flex justify-between items-center p-3">
      <div className="flex items-center flex-grow max-w-md">
        <div className="relative flex items-center flex-grow">
          <i className="fas fa-search absolute left-3 text-white text-base md:text-lg"></i>
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 rounded bg-gray-500 text-white placeholder-white text-xs sm:text-sm md:text-base"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white text-sm sm:text-lg md:text-xl">
        <AiOutlineMail className="bg-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-1 sm:p-2" />
        <CiSettings className="bg-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-1 sm:p-2" />
        <IoIosNotificationsOutline className="bg-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-1 sm:p-2" />
        <img
          src={Profile}
          alt="profile"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
