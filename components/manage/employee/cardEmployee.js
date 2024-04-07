import React from "react";
import { useRouter } from "next/router";
const EmployeeCard = ({ fullName, role, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`employee/${id}`);
      }}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/img/avatar.jpg"
        alt="true"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {fullName}
        </h5>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
          {role}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
