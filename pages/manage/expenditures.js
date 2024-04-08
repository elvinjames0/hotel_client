import React from "react";
import dynamic from "next/dynamic";
const TableExpendituresDynamic = dynamic(
  () => import("@/components/manage/tableExpenditures"),
  {
    ssr: false,
  }
);
const ExpendituresPage = () => {
  return (
    <div>
      <TableExpendituresDynamic />
    </div>
  );
};

export default ExpendituresPage;
