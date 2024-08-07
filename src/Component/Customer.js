import React from "react";
import "./style.css";

const Customer = ({ reviewData }) => {
  const whiteStar = 5 - reviewData.star;
  return (
    <div className="text-white p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center space-x-2">
        <img
          src={reviewData.image}
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <p className="text-sm">{reviewData.name}</p>
      </div>
      <div className="flex items-center space-x-1 mt-2">
        {/* Yellow Stars */}
        {[...Array(reviewData.star)].map((_, index) => (
          <svg
            key={`yellow-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="currentColor"
            />
          </svg>
        ))}

        {/* White Stars */}
        {[...Array(whiteStar)].map((_, index) => (
          <svg
            key={`white-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path
              d="M12 2l2.39 4.84L20 7.2l-3.45 3.37 1.15 4.79-4.7-2.48-4.7 2.48 1.15-4.79L4 7.2l5.61-.36L12 2z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>
      <p className="text-sm mt-2">{reviewData.comment}</p>
      <div className="border-b-2 border-gray-400 mt-4"></div>
    </div>
  );
};

export default Customer;
