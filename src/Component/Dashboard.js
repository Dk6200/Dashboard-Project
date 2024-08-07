import React from "react";

import SideDash from "./SideDash";
import Customer from "./Customer";
import Goal from "./Goal";
import Leaderboard from "./Leaderboard";
import ShowTotal from "./TotalComponents/ShowTotal";
import OrderImg from "../Assets/Order.png";
import DeliverImg from "../Assets/green.png";
import OrangeImg from "../Assets/orange.png";
import RevenueImg from "../Assets/revenue.png";
import customerReview from "../Data/customerreview";
import Profit from "./Profit";
import WeeklyActivityBar from "./WeeklyActivityBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./layout";

const Dashboard = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Layout>
        <div className="text-white text-3xl p-4 font-semibold">Dashboard</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 p-4 overflow-auto">
          <div className="sm:w-[100%] col-span-1 md:col-span-2 lg:col-span-7 bg-black flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
            <ShowTotal
              name={"Total Orders"}
              percentage={"75"}
              src={OrderImg}
              profit={true}
              value={3}
            />
            <ShowTotal
              name={"Total Delivered"}
              percentage={"70"}
              src={DeliverImg}
              profit={false}
              value={3}
            />
            <ShowTotal
              name={"Total Cancelled"}
              percentage={"05"}
              src={OrangeImg}
              profit={true}
              value={3}
            />
            <ShowTotal
              name={"Total Revenue"}
              percentage={"$12K"}
              src={RevenueImg}
              profit={false}
              value={3}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 p-4 rounded-md">
            <Profit />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-7 bg-gray-800 p-4 rounded-md">
            <WeeklyActivityBar />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 p-4 rounded-md">
            <Goal />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-7 bg-gray-800 p-4 rounded-md h-[490px] overflow-auto">
            <Leaderboard />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 p-4 rounded-md h-[490px] overflow-y-auto">
            <h2 className="text-lg font-semibold text-white">
              Customer Feedback
            </h2>
            <div className="p-4">
              {customerReview?.length > 0 &&
                customerReview.map((reviewData, index) => (
                  <Customer key={index} reviewData={reviewData} />
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
