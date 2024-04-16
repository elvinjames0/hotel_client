import HistoryItem from "@/components/storage/historyItem";
import { stockService } from "@/services/stockService";
import React, { useEffect, useState } from "react";

const HistoryStoragePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    stockService
      .getAllStockIn()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold  font-serif mb-7">
        History Import Product
      </h1>
      <div className=" flex flex-col gap-3">
        {data.map((e) => (
          <HistoryItem
            key={e.stock_id}
            fullName={e.fullName}
            date={e.stock_date}
            id={e.stock_id}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryStoragePage;
