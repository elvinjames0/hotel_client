import React from "react";
import ButtonCustom from "../../button";

const TableShift = ({ setIsModalInfo }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Receptionist
            </th>
            <th scope="col" className="px-6 py-3">
              Cash
            </th>
            <th scope="col" className="px-6 py-3">
              Card
            </th>
            <th scope="col" className="px-6 py-3">
              Prepay
            </th>
            <th scope="col" className="px-6 py-3">
              Spending
            </th>
            <th scope="col" className="px-6 py-3">
              Total cash
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Huy Thành
            </th>
            <td className="px-6 py-4">5000000</td>
            <td className="px-6 py-4">5000000</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <ButtonCustom
                content="Transfer"
                color="#D80032"
                onClick={() => setIsModalInfo(true)}
              />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Huy Thành
            </th>
            <td className="px-6 py-4">5000000</td>
            <td className="px-6 py-4">5000000</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 ">
              <ButtonCustom
                content="Transfer"
                color="#D80032"
                onClick={() => setIsModalInfo(true)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableShift;
