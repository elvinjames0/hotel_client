import ButtonCustom from "@/components/button";
import Modal from "@/components/modal";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const TableProductDynamic = dynamic(
  () => import("@/components/stock/tableProduct"),
  {
    ssr: false,
  }
);
// khi số lượng của sản phẩm = 0 thì mới Delete được
const StoragePage = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className="flex justify-end mb-2">
        <ButtonCustom
          content="Add new product"
          color="#1677fe"
          onClick={() => setIsModal(true)}
        />
        <ButtonCustom content="Add storage" color="green" />
      </div>
      <TableProductDynamic isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default StoragePage;
