import React from "react";

const SelectService = () => {
  return (
    <div className="flex text-gray-950">
      <select className="bg-gray-50 border border-gray-300   focus:ring-blue-500 focus:border-blue-500 block w-3/5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="sting">Sting</option>
        <option value="aqua">Aqua</option>
        <option value="redbull">Redbull</option>
        <option value="heineiken">Heineiken</option>
        <option value="tiger">Tiger</option>
        <option value="coca">Coca</option>
        <option value="noodle">Noodle</option>
        <option value="pho">Phở</option>
      </select>
      <input className="w-1/5" type="text" placeholder="1" />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium w-1/5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        +
      </button>
    </div>
  );
};

export default SelectService;
// component này
