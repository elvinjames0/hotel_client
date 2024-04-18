import React from "react";
import dynamic from "next/dynamic";
const TableManageRoomDynamic = dynamic(
  () => import("@/components/settingComponent/manageRoom/tableManageRoom"),
  {
    ssr: false,
  }
);
const ManageRoomPage = () => {
  return (
    <div>
      <h1 className=" text-2xl font-bold mb-6">Manage Room</h1>
      <TableManageRoomDynamic />
    </div>
  );
};

export default ManageRoomPage;
