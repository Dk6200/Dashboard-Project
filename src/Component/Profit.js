import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GreenImg from "../Assets/Green-Arrow.png";
const percentage = 70;

const Profit = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="flex flex-col justify-between items-start">
        <div>Net Profit</div>
        <h1 className="text-3xl font-bold">$ 6759.21</h1>
        <div className="flex justify-center items-center">
          {" "}
          <img src={GreenImg} className="w-2 h-2 m-1" alt="redarrow" />
          <span className="text-sm font-light">{3}%</span>
        </div>
      </div>
      <div className="w-28">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
};

export default Profit;
