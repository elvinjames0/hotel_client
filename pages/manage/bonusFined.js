import React from "react";
/*
1 bộ lọc check thưởng/phạt
tìm kiếm theo tên, theo ngày/tháng/năm
-1 nút thêm thưởng/phạt cần các thông tin:
tên người thưởng/phạt
ngảy thưởng/phạt
số tiền thưởng/phạt
mô tả thưởng/phạt
action xóa thưởng/phạt

*/
import dynamic from "next/dynamic";
const TableBonusFinedDynamic = dynamic(
  () => import("@/components/bonusFined/tableBonusFined"),
  { ssr: false }
);
const BonusFinedPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">History Bonus & Fined</h1>
      <TableBonusFinedDynamic />
    </div>
  );
};

export default BonusFinedPage;
