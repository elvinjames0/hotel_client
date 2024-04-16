import moment from "moment";
import { useRouter } from "next/router";
import React from "react";

const HistoryItem = ({ fullName, date, id }) => {
  const router = useRouter();
  return (
    <div key={id} className=" bg-slate-600 w-full h-10 p-7 rounded-lg flex  ">
      <div className=" w-1/2 flex justify-between items-center">
        <div className="flex gap-3">
          <p className=" font-semibold">Created by: </p>
          <p className=" text-white font-medium">{fullName}</p>
        </div>
        <div className="flex gap-3">
          <p className=" font-semibold">Date </p>
          <p className=" text-white font-medium">
            {moment(`${date}`).format("MM/DD/YYYY hh:mm:ss")}
          </p>
        </div>
      </div>
      <div className=" w-1/2 flex items-center justify-end">
        <p
          onClick={() => {
            router.push(`/storage/historyStorage/${id}`);
          }}
          className=" font-medium hover:underline hover:cursor-pointer"
        >
          See Detail
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;
