import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total products sold",
      font: {
        size: 24,
        family: "Roboto Condensed",
      },
    },
  },
};
const labels = [
  "Sting",
  "Aqua",
  "Redbull",
  "Heneiken",
  "Tiger",
  "Coca",
  "Ramen",
  "Phở",
];
const data = {
  labels,
  datasets: [
    {
      label: "Total",
      data: [65, 59, 80, 81, 56, 55, 40, 90],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(46, 228, 138, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgba(46, 228, 138)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
