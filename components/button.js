import React from "react";

const ButtonCustom = ({ color, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${color}` }}
      className={`text-white border-2 border-white hover:bg-${color}-800 focus:outline-none focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
