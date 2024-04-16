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
const FormCreateImportDynamic = dynamic(
  () => import("@/components/storage/formCreateImport"),
  {
    ssr: false,
  }
);
// khi số lượng của sản phẩm = 0 thì mới Delete được
const StoragePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isImport, setIsImport] = useState(false);

  return (
    <>
      <Modal isModal={isImport} setIsModal={setIsImport} />
      <FormCreateImportDynamic isModal={isImport} setIsModal={setIsImport} />
      <div className="flex justify-end mb-2">
        <ButtonCustom
          content="Add new product"
          color="#1677fe"
          onClick={() => setIsModal(true)}
        />
        <ButtonCustom
          content="Add storage"
          color="green"
          onClick={() => setIsImport(true)}
        />
      </div>
      <TableProductDynamic isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default StoragePage;
