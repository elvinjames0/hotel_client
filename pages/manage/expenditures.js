import React, { useState } from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";
import ButtonCustom from "@/components/button";
const TableExpendituresDynamic = dynamic(
  () => import("@/components/manage/expenditures/tableExpenditures"),
  {
    ssr: false,
  }
);
const ExpendituresPage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <Modal isModal={isModal} setIsModal={setIsModal} />
      <h1 className="text-2xl font-bold text-center font-serif">
        Expenditures of Hotel
      </h1>
      <div className="flex justify-end mb-2">
        <ButtonCustom
          content="Add new expenditures"
          color="#1677fe"
          onClick={() => setIsModal(true)}
        />
      </div>
      <TableExpendituresDynamic isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default ExpendituresPage;
