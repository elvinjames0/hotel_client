import { Table, Tooltip, Button, message, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import Modal from "../../modal";
import { roomService } from "@/services/roomService";
import FormUpdateRoom from "./formUpdateRoom";
import { render } from "react-dom";
import { convertToVnd } from "@/controller/convertToVnd";

const columns = [
  {
    title: "ID",
    dataIndex: "room_id",
    key: "room_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "room_type",
    key: "room_type",
    render: (type) => {
      switch (type) {
        case 1:
          return <Tag color={"green"}>Standard</Tag>;
        case 2:
          return <Tag color={"blue"}>Superior</Tag>;
        case 3:
          return <Tag color={"gold"}>Deluxe</Tag>;
        case 4:
          return <Tag color={"error"}>Suit</Tag>;
      }
    },
  },
  {
    title: "Number",
    dataIndex: "room_number",
    key: "room_number",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (type) => {
      switch (type) {
        case 0:
          return <Tag color={"green"}>Empty</Tag>;
        case 1:
          return <Tag color={"cyan"}>Using</Tag>;
        case 2:
          return <Tag color={"gold"}>Cleaning</Tag>;
        case 3:
          return <Tag color={"error"}>Not use</Tag>;
      }
    },
  },
  {
    title: "Balcony",
    key: "balcony",
    dataIndex: "balcony",
    render: (type) => {
      switch (type) {
        case true:
          return <Tag color={"green"}>Yes</Tag>;
        case false:
          return <Tag color={"error"}>No</Tag>;
      }
    },
  },
  {
    title: "Fan",
    key: "fan",
    dataIndex: "fan",
    render: (type) => {
      switch (type) {
        case true:
          return <Tag color={"green"}>Yes</Tag>;
        case false:
          return <Tag color={"error"}>No</Tag>;
      }
    },
  },
  {
    title: "Chair",
    key: "chair",
    dataIndex: "chair",
    render: (type) => {
      switch (type) {
        case true:
          return <Tag color={"green"}>Yes</Tag>;
        case false:
          return <Tag color={"error"}>No</Tag>;
      }
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ onDelete, onUpdate }) => {
      return (
        <div className=" flex gap-2">
          <Tooltip title="Delete">
            <Button
              onClick={() => onDelete()}
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
          <Tooltip title="Update">
            <Button
              onClick={() => onUpdate()}
              shape="circle"
              icon={<EditOutlined />}
            />
          </Tooltip>
        </div>
      );
    },
  },
];
const typeList = [
  {
    title: "ID",
    dataIndex: "room_type",
    key: "room_type",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "room_type",
    key: "room_type",
    render: (type) => {
      switch (type) {
        case 1:
          return <Tag color={"green"}>Standard</Tag>;
        case 2:
          return <Tag color={"blue"}>Superior</Tag>;
        case 3:
          return <Tag color={"gold"}>Deluxe</Tag>;
        case 4:
          return <Tag color={"error"}>Suit</Tag>;
      }
    },
  },
  {
    title: "Quantity",
    dataIndex: "room_quantity",
    key: "room_quantity",
  },
  {
    title: "Price by day",
    dataIndex: "price_by_day",
    key: "price_by_day",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Price by first hour",
    dataIndex: "price_by_first_hour",
    key: "price_by_first_hour",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Price by next hour",
    dataIndex: "price_by_next_hour",
    key: "price_by_next_hour",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ onDelete, onUpdate }) => {
      return (
        <div className=" flex gap-2">
          <Tooltip title="Delete">
            <Button
              onClick={() => onDelete()}
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
          <Tooltip title="Update">
            <Button
              onClick={() => onUpdate()}
              shape="circle"
              icon={<EditOutlined />}
            />
          </Tooltip>
        </div>
      );
    },
  },
];

const TableManageRoom = () => {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [update, setUpdate] = useState({});
  const [roomTypeList, setRoomTypeList] = useState([]);
  let fetch = () => {
    roomService
      .getAllRoomTable()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          return {
            ...e,
            action: {
              onDelete: () => {
                roomService
                  .deleteRoom(e.room_id)
                  .then((res) => {
                    message.success("Delete successfully");
                    fetch();
                  })
                  .catch((err) => {
                    message.error("Fail");
                  });
              },
              onUpdate: () => {
                roomService
                  .getDetailRoom(e.room_id)
                  .then((res) => {
                    setIsModal(true);
                    setUpdate(res.data.data);
                  })
                  .catch((err) => {
                    message.error("Fail");
                  });
              },
            },
          };
        });

        setData(dataRaw);
      })
      .catch((err) => {});
    roomService
      .getAllRoomType()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          return {
            ...e,
            action: {
              onDelete: () => {
                roomService
                  .deleteRoomType(e.room_type)
                  .then((res) => {
                    message.success("Delete successfully");
                    fetch();
                  })
                  .catch((err) => {
                    message.error("Fail");
                  });
              },
            },
          };
        });
        setRoomTypeList(dataRaw);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <FormUpdateRoom
        setIsModal={setIsModal}
        isModal={isModal}
        fetch={fetch}
        data={update}
      />
      <Table columns={columns} dataSource={data} />
      <Table columns={typeList} dataSource={roomTypeList} />
    </>
  );
};

export default TableManageRoom;
// {
//           "payroll_id": 1,
//           "employee_id": 1,
//           "day_of_work": 1,
//           "allowance": 500000,
//           "total_bonus": 125000,
//           "total_fine": 50000,
//           "status": true,
//           "payroll_date_time": "25/03/2024, 16:37:49",
//           "total_salary": 1381452,
//           "EMPLOYEE": "Nguyễn Huy Thành"
//       },
