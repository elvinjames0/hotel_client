import React from "react";
import dynamic from "next/dynamic";
const FormCreateRoomTypeDynamic = dynamic(
  () => import("@/components/settingComponent/formCreateRoomType"),
  {
    ssr: false,
  }
);
const AddRoomPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold font-serif mb-6">
        Create New Room Type
      </h1>
      <FormCreateRoomTypeDynamic />
    </>
  );
};

export default AddRoomPage;
