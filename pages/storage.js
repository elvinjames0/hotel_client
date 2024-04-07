import ButtonCustom from "@/components/button";
import React from "react";
// khi số lượng của sản phẩm = 0 thì mới Delete được
const StoragePage = () => {
  return (
    <>
      <div className="flex justify-end mb-2">
        <ButtonCustom content="Add new product" color="#1677fe" />
        <ButtonCustom content="Add storage" color="green" />
      </div>
      <div className=" w-full flex justify-center">
        <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
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
                Sting
              </th>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4">15.000đ</td>
              <td className=" py-4">
                <ButtonCustom
                  content="DELETE"
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
                Coca
              </th>
              <td className="px-6 py-4">150</td>
              <td className="px-6 py-4">15.000đ</td>

              <td className=" py-4 ">
                <ButtonCustom
                  content="DELETE"
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
                Pepsi
              </th>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4">15.000đ</td>
              <td className=" py-4">
                <ButtonCustom
                  content="DELETE"
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
                Phở
              </th>
              <td className="px-6 py-4">150</td>
              <td className="px-6 py-4">15.000đ</td>

              <td className=" py-4 ">
                <ButtonCustom
                  content="DELETE"
                  color="#D80032"
                  onClick={() => setIsModalInfo(true)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StoragePage;
