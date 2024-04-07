import ButtonCustom from "@/components/button";
import React from "react";

const ShiftInfo = ({ isModalInfo, setIsModalInfo }) => {
  return (
    <div className="w-full">
      <div
        id="room-info"
        className={
          isModalInfo
            ? "absolute-center w-1/3 border-2 shadow-2xl rounded-lg p-6 text-white"
            : "hidden"
        }
        style={{ backgroundColor: "#001529" }}
      >
        <h1 className="text-2xl font-semibold border-b-2 h-10 border-blue-300 mb-3">
          Thành's SHIFT
        </h1>
        <div>
          <div className="grid grid-cols-2 my-3 font-bold">
            <h1 className="text-base">The rooms were sold</h1>
            <h1 className="text-base">100 rooms</h1>
          </div>
          <div className="grid grid-cols-2 my-3 h-24 overflow-y-scroll">
            <div className=" flex flex-col gap-3  ">
              <h2>Standard</h2>
              <h2>Superior</h2>
              <h2>Deluxe</h2>
              <h2>Suite</h2>
            </div>
            <div className=" flex flex-col gap-3 ">
              <h2>35 rooms</h2>
              <h2>40 rooms</h2>
              <h2>15 rooms</h2>
              <h2>10 rooms</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 my-3 font-bold">
            <h1 className="text-base">Food/Beverage were sold</h1>
            <h1 className="text-base">100 products</h1>
          </div>
          <div className="grid grid-cols-2 my-3 h-24 overflow-y-scroll">
            <div className=" flex flex-col gap-3  ">
              <h2>Sting</h2>
              <h2>Aqua</h2>
              <h2>Coca</h2>
              <h2>Phở</h2>
            </div>
            <div className=" flex flex-col gap-3 ">
              <h2>35 products</h2>
              <h2>40 products</h2>
              <h2>15 products</h2>
              <h2>10 products</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 my-3 font-bold">
            <h1 className="text-base">Total revenue</h1>
            <h1 className="text-base">90.000.000đ</h1>
          </div>
          <div className="grid grid-cols-2 my-3 ">
            <div className=" flex flex-col gap-3  ">
              <h2>Total cash money</h2>
              <h2>Total card money</h2>
              <h2>Spending money</h2>
            </div>
            <div className=" flex flex-col gap-3 ">
              <h2>35.000.000đ</h2>
              <h2>40.000.000đ</h2>
              <h2>15.000.000đ</h2>
            </div>
          </div>
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows="2"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your description here..."
        ></textarea>
        <div className="flex justify-end mt-3 gap-4">
          <ButtonCustom
            color="red"
            content="Cancel"
            onClick={() => setIsModalInfo(false)}
          />
          <ButtonCustom
            color="blue"
            content="Confirm"
            onClick={() => setIsModalInfo(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ShiftInfo;
