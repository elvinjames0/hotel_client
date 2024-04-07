import React from "react";
import ButtonCustom from "../../button";

const ConfirmPayBill = ({ isConfirm, setIsConfirm, setIsModal }) => {
  const handleTurnOff = () => {
    setIsConfirm(false);
    setIsModal(false);
  };
  return (
    <div className={isConfirm ? "w-full" : "hidden"}>
      <div className="w-1/5 absolute absolute-center p-5 border-2 border-gray-900 rounded-md bg-gray-300">
        <h1 className="text-center text-xl font-medium text-red-600">
          Do you want to pay the bill?
        </h1>
        <div className="flex justify-center my-3">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-3 font-bold">
              <h3>Room price</h3>
              <h3>Service</h3>
              <h3>Other expenses</h3>
              <h3>Discount</h3>
              <h3>Total</h3>
            </div>
            <div className="flex flex-col items-end gap-3">
              <h3>550.000đ</h3>
              <h3>50.000đ</h3>
              <h3>50.000đ</h3>
              <h3>50.000đ</h3>
              <h3>600.000đ</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-3">
          <ButtonCustom
            color="red"
            content="No"
            onClick={() => setIsConfirm(false)}
          />
          <ButtonCustom color="blue" content="Yes" onClick={handleTurnOff} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayBill;
