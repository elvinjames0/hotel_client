import { Table, Tag, Tooltip, Button, DatePicker, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import Modal from "../modal";
import FilterTable from "../filterTable";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (value) => {
      value *= 1;
      let color = value === 0 ? "red" : "green";
      let text = value === 0 ? "Fined" : "Bonus";
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ moreInfo }) => {
      return (
        <Tooltip title="Delete">
          <Button
            // onClick={() => moreInfo()}
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      );
    },
  },
];

const TableHistoryBill = () => {
  const [isModal, setIsModal] = useState(false);

  const data = [
    {
      key: "1",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 0,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
    {
      key: "2",
      name: "John Brown",
      date: "23/02/2002",
      description: "Đủ kpi",
      price: 1000000,
      status: 1,
      action: {
        // moreInfo: () => {
        //   setIsModal(true);
        // },
      },
    },
  ];
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <FilterTable type={1} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableHistoryBill;
