import { Table, Tag, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Modal from "../../modal";
import RoomInformation from "../../homepage/roomInfomation/roomInfomation";
import FilterTable from "../../filterTable";

const columns = [
  {
    title: "Bill",
    dataIndex: "bill",
    key: "bill",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Room",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Prepay",
    dataIndex: "prepay",
    key: "prepay",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Other",
    dataIndex: "other",
    key: "other",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Receptionist",
    dataIndex: "receptionist",
    key: "receptionist",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (value) => {
      value *= 1;
      let color = value === 0 ? "gold" : value === 1 ? "green" : "red";
      let text =
        value === 0 ? "Processing" : value === 1 ? "Success" : "Cancel";
      return <Tag color={color}>{text}</Tag>;
    },
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

const TableHistoryBill = () => {
  const [isModal, setIsModal] = useState(false);
  const data = [
    {
      key: "1",
      bill: 1,
      name: "John Brown",
      room: 101,
      date: "23/02/2002",
      price: 1000000,
      service: 50000,
      prepay: 100,
      discount: 50,
      other: 500,
      total: 2000,
      receptionist: "Huy Thành",
      status: 1,
      action: {
        moreInfo: () => {
          setIsModal(true);
        },
      },
    },
    {
      key: "2",
      bill: 2,
      name: "John Brown",
      room: 101,
      date: "23/02/2002",
      price: 1000000,
      service: 50000,
      prepay: 100,
      discount: 50,
      other: 500,
      total: 2000,
      receptionist: "Huy Thành",
      status: 1,
      action: {
        moreInfo: () => {
          setIsModal(true);
        },
      },
    },
  ];
  // sẽ làm crud dữ liệu ở đây
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <RoomInformation
        isModal={isModal}
        setIsModal={setIsModal}
        // setIsConfirm={setIsConfirm}
      />
      <FilterTable type={0} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableHistoryBill;
