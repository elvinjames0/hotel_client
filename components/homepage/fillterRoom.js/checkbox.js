import React, { useState } from "react";

const Checkbox = ({ content, focus, handleCheckboxChange }) => {
  return (
    <div className="flex items-center ps-4 border-2 border-gray-900 rounded dark:border-gray-700">
      <input
        id={`${focus}-checkbox`}
        type="checkbox"
        onChange={handleCheckboxChange}
        value={`${focus}`}
        name={`${focus}`}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={`${focus}-checkbox`}
        className="w-full py-4 ms-2 text-sm font-medium text-gray-950 dark:text-gray-300"
      >
        {content}
      </label>
    </div>
  );
};

export default Checkbox;
