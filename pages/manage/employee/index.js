import EmployeeCard from "@/components/manage/employee/cardEmployee";
import { employeeService } from "@/services/employeeService";
import React, { useState, useEffect } from "react";

const EmployeePage = () => {
  let [data, setData] = useState([]);
  const fetch = async () => {
    let list = await employeeService.getEmployeeList();
    setData(list.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold text-center font-serif">
        Information of employees
      </h1>
      <div className="grid grid-cols-2 gap-5 my-4">
        <h1>test</h1>
        {data?.map((e) => (
          <EmployeeCard
            fullName={e.fullName}
            role={e.role}
            id={e.employee_id}
            key={e.employee_id}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeePage;
