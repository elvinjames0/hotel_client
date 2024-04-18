import React from "react";
import dynamic from "next/dynamic";
const FormCreateRoomDynamic = dynamic(
  () => import("@/components/settingComponent/formCreateRoom"),
  {
    ssr: false,
  }
);
const AddRoomPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold font-serif mb-6">Create New Room</h1>
      <FormCreateRoomDynamic />
    </>
  );
};

export default AddRoomPage;
