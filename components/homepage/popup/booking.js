import React, { useState } from "react";
import ButtonCustom from "../../button";

const BookingForm = ({ isModal, setIsModal }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleBookingRoom = (event) => {
    event.preventDefault();
    const info = { username, password };
    console.log("info: ", info);
    setIsModal(false);
  };
  return (
    <div
      className={
        isModal
          ? "w-1/4 border-2 text-white border-white rounded-xl p-5 absolute-center"
          : "hidden"
      }
      style={{ backgroundColor: "#001529" }}
    >
      <form>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Huy Thành Hotel"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            ID/Passport
          </label>
          <input
            type="password"
            id="password"
            placeholder="•••••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" flex justify-end mt-2">
          <ButtonCustom
            color="blue"
            content="Submit"
            onClick={handleBookingRoom}
          />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
