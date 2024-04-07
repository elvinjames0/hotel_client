import React from "react";
import SelectService from "./selectService";
import ButtonCustom from "../../button";
import Cart from "./cart";

const RoomInformation = ({ isModal, setIsModal, setIsConfirm }) => {
  return (
    <div className="w-full">
      <div
        id="room-info"
        className={
          isModal
            ? "absolute-center w-1/3 border-2 shadow-2xl rounded-lg p-6 text-white"
            : "hidden"
        }
        style={{ backgroundColor: "#001529" }}
      >
        <h1 className="text-2xl font-semibold border-b-2 h-10 border-blue-300">
          Room 101
        </h1>
        <div className="grid grid-cols-2 my-3">
          <div className=" flex flex-col gap-3 font-medium ">
            <h2>Name</h2>
            <h2>Check-in</h2>
            <h2>Check-out</h2>
            <h2>ID/Passport</h2>
            <h2>Prepay</h2>
            <h2>Discount</h2>
            <h2>Other expenses</h2>
            <h2>Service</h2>
          </div>
          <div className=" flex flex-col gap-3 ">
            <h2>Elvin James </h2>
            <h2>01/03/2024 | 12:20 PM </h2>
            <h2>01/03/2024 | 18:20 PM</h2>
            <h2>075432411587 </h2>
            <div>
              <input
                className="text-gray-900 w-4/5"
                type="text"
                placeholder="50000"
              ></input>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium w-1/5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                +
              </button>
            </div>
            <input
              className="text-gray-900"
              type="text"
              placeholder="50000"
            ></input>
            <input
              className="text-gray-900"
              type="text"
              placeholder="50000"
            ></input>
            <SelectService />
          </div>
        </div>
        <Cart />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your description here..."
        ></textarea>
        <div className="flex justify-end mt-3 gap-4">
          <ButtonCustom
            color="red"
            content="Cancel"
            onClick={() => setIsModal(false)}
          />
          <ButtonCustom
            color="blue"
            content="Pay"
            onClick={() => setIsConfirm(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomInformation;
