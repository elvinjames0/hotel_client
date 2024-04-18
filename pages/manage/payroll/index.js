import React from "react";
import dynamic from "next/dynamic";
const TablePayrollDynamic = dynamic(
  () => import("@/components/payroll/tablePayroll"),
  { ssr: false }
);
const PayrollPage = () => {
  return (
    <div>
      <h1 className=" text-2xl font-bold mb-6"> All Payroll of Employees</h1>
      <TablePayrollDynamic />
    </div>
  );
};

export default PayrollPage;
