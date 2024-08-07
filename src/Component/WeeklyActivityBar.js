import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "tailwindcss/tailwind.css";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import "./style.css";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// Function to generate sequential data from 1 to length
const generateData = (length) =>
  Array.from({ length }, () => Math.floor(Math.random() * 10000));

const WeeklyActivityBar = () => {
  const [seriesNb, setSeriesNb] = useState(1);
  const [itemNb, setItemNb] = useState(40);
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

  // Generate series data with random values from 0 to 12000
  const series = Array.from({ length: 10 }, (_, i) => ({
    label: `Series ${i + 1}`,
    data: generateData(itemNb),
  }));

  const data = {
    labels: Array.from({ length: itemNb }, (_, i) => (i + 1).toString()), // X-axis labels from 1 to 30
    datasets: series.slice(0, seriesNb).map((s) => ({
      label: s.label,
      data: s.data,
      backgroundColor: "rgba(75, 192, 192, 1)", // Bar color
      borderColor: "rgba(75, 192, 192, 0.2)", // Border color
      borderWidth: 0,
      borderRadius: 10, // Rounded top corners
    })),
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg relative p-4">
      <div className="absolute top-2 left-2 p-1">
        <span className="text-base font-semibold">Activity</span>
      </div>
      <div className="absolute top-2 right-2">
        <Menu as="div" className="relative">
          <MenuButton className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center">
            {selectedPeriod}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </MenuButton>
          <Menu.Items className="absolute right-0 flex flex-col w-28 text-base bg-gray-700 text-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mt-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedPeriod("Weekly")}
                  className={`px-4 py-2 ${active ? "bg-gray-600" : ""}`}
                >
                  Weekly
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedPeriod("Monthly")}
                  className={`px-4 py-2 ${active ? "bg-gray-600" : ""}`}
                >
                  Monthly
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedPeriod("Yearly")}
                  className={`px-4 py-2 ${active ? "bg-gray-600" : ""}`}
                >
                  Yearly
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div className="mt-12">
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 12,
                    family: "'Inter', sans-serif",
                    weight: "500",
                  },
                  color: "white",
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) =>
                    `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
                },
                bodyFont: {
                  family: "'Inter', sans-serif",
                },
                titleFont: {
                  family: "'Inter', sans-serif",
                },
                backgroundColor: "rgba(75, 192, 192, 0.8)",
                titleColor: "white",
                bodyColor: "white",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Week Number", // X-axis title
                  font: {
                    family: "'Inter', sans-serif",
                    size: 14,
                    weight: "500",
                  },
                  color: "white",
                },
                min: 5,
                max: 27,
                ticks: {
                  callback: (value) =>
                    [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27].includes(
                      parseInt(value)
                    )
                      ? value
                      : "",
                  font: {
                    family: "'Inter', sans-serif",
                    size: 12,
                    weight: "500",
                  },
                  color: "white",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Value", // Y-axis title
                  font: {
                    family: "'Inter', sans-serif",
                    size: 14,
                    weight: "500",
                  },
                  color: "white",
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                ticks: {
                  stepSize: 5000,
                  callback: (value) => {
                    if (value === 0) return "0";
                    if (value === 5000) return "5k";
                    if (value === 10000) return "10k";
                    if (value === 15000) return "15k";
                    return "";
                  },
                  font: {
                    family: "'Inter', sans-serif",
                    size: 12,
                    weight: "500",
                  },
                  color: "white",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default WeeklyActivityBar;
