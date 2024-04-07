import React, { useState } from "react";
import ButtonCustom from "../../button";
import InputRadio from "../inputRadio";

const ChangeStatus = ({ isStatus, setIsStatus }) => {
  const [status, setStatus] = useState();
  const handleChangeStatus = (event) => {
    // cần thêm số phòng
    event.preventDefault();
    const info = { status };
    console.log("info: ", info);
    setIsStatus(false);
  };
  return (
    <div
      className={
        isStatus
          ? "w-1/4 border-2 text-white border-white rounded-xl p-5 absolute-center"
          : "hidden"
      }
      style={{ backgroundColor: "#001529" }}
    >
      <h1 className="text-white font-bold text-center text-xl">
        Status room 101
      </h1>
      <form>
        <div className="grid grid-cols-2 gap-5 my-2">
          <InputRadio content="Empty" focus="empty" setStatus={setStatus} />
          <InputRadio
            content="Cleaning"
            focus="cleaning"
            setStatus={setStatus}
          />
          <InputRadio content="Using" focus="using" setStatus={setStatus} />
          <InputRadio content="Not use" focus="notuse" setStatus={setStatus} />
        </div>
        <div className=" flex justify-end ">
          <ButtonCustom
            color="blue"
            content="Change"
            onClick={handleChangeStatus}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangeStatus;
