import React from "react";
import Image from "../ShowImage/Image";
import RedImg from "../../Assets/Red_Arrow.png";
import GreenImg from "../../Assets/Green-Arrow.png";
const ShowTotal = ({ name, src, percentage, profit, value }) => {
  return (
    <div className="border-2 border-black w-[100%] md:w-[20%] lg:w-[20%] p-2 bg-gray-800 text-white rounded rounded-md">
      <Image src={src} />
      <div className="text-xs font-medium py-2">{name}</div>
      <div className=" py-3 flex justify-between items-center">
        <div className="font-bold text-xl">{percentage}</div>
        {profit ? (
          <div className="flex justify-center items-center">
            <img className="w-2 h-2 m-1" src={GreenImg} alt="greenarrow" />
            <span className="text-sm font-light">{value}%</span>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            {" "}
            <img src={RedImg} className="w-2 h-2 m-1" alt="redarrow" />
            <span className="text-sm font-light">{value}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowTotal;
