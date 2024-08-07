import React from "react";

function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 text-gray-900">
      <div className="max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We’re excited to have you here! Please click on the "Home" icon in the
          sidebar to get started.
        </p>
        <img
          src="https://via.placeholder.com/300x200.png?text=Welcome+Image"
          alt="Welcome"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-500">
          Explore the various features and get the most out of your dashboard.
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
