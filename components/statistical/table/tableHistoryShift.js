import { Table, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Modal from "../../modal";
import FilterTable from "../../filterTable";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Total Cash",
    dataIndex: "totalCash",
    key: "totalCash",
  },
  {
    title: "Total Card",
    dataIndex: "totalCard",
    key: "totalCard",
  },

  {
    title: "Expenditures",
    dataIndex: "expenditures",
    key: "expenditures",
  },
  {
    title: "Total Revenue",
    dataIndex: "revenue",
    key: "revenue",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ moreInfo }) => {
      return (
        <Tooltip title="Info">
          <Button
            onClick={() => moreInfo()}
            shape="circle"
            icon={<SearchOutlined />}
          />
        </Tooltip>
      );
    },
  },
];

const TableHistoryShift = () => {
  const [isModal, setIsModal] = useState(false);
  const data = [
    {
      key: "1",
      date: "23/02/2002",
      totalCash: 100000,
      totalCard: 100000,
      expenditures: 101,
      revenue: 1000000,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      date: "23/02/2002",
      totalCash: 100000,
      totalCard: 100000,
      expenditures: 101,
      revenue: 1000000,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
  ];
  // sẽ làm crud dữ liệu ở đây
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <FilterTable type={0} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
/*
total cash ,date, card , expenditures, total revenue
*/
export default TableHistoryShift;
