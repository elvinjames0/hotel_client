import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";
import ShiftInfo from "@/components/statistical/shiftInfo/shiftInfo";
import TableShift from "@/components/statistical/table/tableShift";
const TableBillDynamic = dynamic(
  () => import("../components/statistical/table/tableHistoryBill"),
  {
    ssr: false,
  }
);
const TableShiftDynamic = dynamic(
  () => import("../components/statistical/table/tableHistoryShift"),
  {
    ssr: false,
  }
);
const ChartDynamic = dynamic(
  () => import("../components/statistical/chart/chart"),
  {
    ssr: false,
  }
);
const StatisticalPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModalInfo, setIsModalInfo] = useState(false);
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <Modal setIsModal={setIsModalInfo} isModal={isModalInfo} />
      <ShiftInfo isModalInfo={isModalInfo} setIsModalInfo={setIsModalInfo} />
      <ChartDynamic />
      <h1 className="text-2xl font-bold my-3">History Bill</h1>
      <TableBillDynamic />
      <h1 className="text-2xl font-bold my-3">Detail Shift</h1>
      <TableShift setIsModalInfo={setIsModalInfo} />
      <h1 className="text-2xl font-bold my-3">History Shift</h1>
      <TableShiftDynamic />
    </>
  );
};

export default StatisticalPage;
