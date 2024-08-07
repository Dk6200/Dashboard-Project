import React from "react";
import orderData from "../Data/orderdata";

const Leaderboard = () => {
  return (
    <div className="text-white p-4">
      <h1 className="font-bold text-lg mb-4">Recent Orders</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-left text-sm">
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Order No.</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.length > 0 &&
              orderData.map((data) => (
                <tr
                  key={data.orderId}
                  className="border-b-2 border-gray-300 text-sm"
                >
                  <td className="flex items-center px-4 py-2">
                    <img
                      src={data.image}
                      alt="profile"
                      className="w-10 h-10 rounded-full mr-2 border-2 border-white "
                    />
                    <span className="hidden sm:block">{data.name}</span>
                  </td>
                  <td className="px-4 py-2">{data.orderId}</td>
                  <td className="px-4 py-2">${data.Amount}</td>
                  <td className="px-4 py-2">
                    {data.status === "Delivered" ? (
                      <button className="bg-green-700 text-white rounded-full px-4 py-1 text-xs">
                        Delivered
                      </button>
                    ) : (
                      <button className="bg-red-700 text-white rounded-full px-4 py-1 text-xs">
                        Rejected
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
