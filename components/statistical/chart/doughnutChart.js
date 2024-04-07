import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const labels = ["Standard", "Vip", "Deluxe", "Suit"];
const dataDoughnut = {
  labels,
  datasets: [
    {
      label: "Total",
      data: [65, 59, 80, 70],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 215, 0, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(255,215, 0)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total rooms sold",
      font: {
        size: 24,
        family: "Roboto Condensed",
      },
    },
  },
};
const DoughnutChart = () => {
  return <Doughnut options={options} data={dataDoughnut} />;
};

export default DoughnutChart;
