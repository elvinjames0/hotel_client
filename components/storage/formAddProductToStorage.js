import ButtonCustom from "@/components/button";
import { stockService } from "@/services/stockService";
import { message } from "antd";
import React, { useEffect, useState } from "react";

const FormAddToStorage = () => {
  const [productList, setProductList] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value * 1;
    setInputValues(newInputValues);
  };
  const handleSubmit = async () => {
    try {
      const data = productList.map((product, index) => ({
        product_id: product.product_id,
        quantity: inputValues[index] || 0,
      }));
      await stockService.addStockInDetail({ data });
      message.success("Import successfully");
    } catch (error) {
      message.error("Please create stock in before add to storage !!!");
    }
  };
  useEffect(() => {
    stockService
      .getAllProduct()
      .then((res) => {
        setProductList(res?.data?.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold  font-serif mb-7">
        Import Product To Storage
      </h1>
      <div className=" flex flex-col gap-4">
        {productList.map((e, index) => {
          return (
            <div key={index} className=" flex w-full">
              <p className=" w-1/4 text-lg font-medium">{e?.product_name}</p>
              <input
                type="text"
                id="first_name"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="..."
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          );
        })}
      </div>
      <ButtonCustom color="blue" content="Import" onClick={handleSubmit} />
    </div>
  );
};

export default FormAddToStorage;
