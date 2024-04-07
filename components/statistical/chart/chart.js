import React from "react";
import LineChart from "./lineChart";
import DoughnutChart from "./doughnutChart";
import BarChart from "./barChart";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const ChartStatistical = () => {
  return (
    <>
      <div className="flex justify-end">
        <Space direction="vertical" size={12}>
          <RangePicker />
        </Space>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="w-5/6">
          <LineChart />
        </div>
      </div>
      <div className="flex my-10 ">
        <div className="w-1/2 h-96">
          <DoughnutChart />
        </div>
        <div className="w-1/2 h-96">
          <BarChart />
        </div>
      </div>
    </>
  );
};

export default ChartStatistical;
