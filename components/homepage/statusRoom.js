import React from "react";

const StatusRoom = ({ color, content }) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`w-16 h-12 relative border-2 rounded border-gray-950 hover:cursor-pointer`}
        style={{ backgroundColor: `${color}` }}
      >
        <div className="w-full ">
          <p className="text-xs right-1 absolute  font-mono text-gray-950 font-semibold">
            time
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="text-xl  font-mono text-gray-950">?</p>
        </div>
      </div>
      <h1 className=" text-base font-medium">{content}: 23 rooms</h1>
    </div>
  );
};

export default StatusRoom;
// component này là phần đầu tiên trong trang index
