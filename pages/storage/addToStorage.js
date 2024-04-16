import React from "react";
import dynamic from "next/dynamic";
const FormAddProductToStorageDynamic = dynamic(
  () => import("@/components/storage/formAddProductToStorage"),
  {
    ssr: false,
  }
);
const FormAddToStoragePage = () => {
  return <FormAddProductToStorageDynamic />;
};

export default FormAddToStoragePage;
