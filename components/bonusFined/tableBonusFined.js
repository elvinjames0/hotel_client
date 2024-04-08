import { Table, Tag, Tooltip, Button, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Modal from "../modal";
import FilterTable from "../filterTable";
import { payrollService } from "@/services/payrollService";
import moment from "moment";
import { convertToVnd } from "@/controller/convertToVnd";
import BonusFineForm from "./formUpdate";

const columns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "bf_date_time",
    key: "bf_date_time",
    render: (text) => <p> {moment(`${text}`).format("MM/DD/YYYY")}</p>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Money",
    dataIndex: "money",
    key: "money",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Type",
    key: "bf_type",
    dataIndex: "bf_type",
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
    render: ({ onDelete, onUpdate }) => {
      return (
        <>
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
        </>
      );
    },
  },
];

const TableHistoryBill = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  let fetch = () => {
    payrollService
      .getAllBonusFine()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          return {
            ...e,
            action: {
              onDelete: () => {
                payrollService
                  .deleteBonusFine(e.bf_id)
                  .then((res) => {
                    message.success("Delete successfully");
                    fetch();
                  })
                  .catch((err) => {
                    message.error("Fail");
                  });
              },
              onUpdate: () => {
                setIsModal(true);
                setInfo(e);
              },
            },
          };
        });
        setData(dataRaw.reverse());
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <FilterTable type={1} />
      <BonusFineForm
        data={info}
        fetch={fetch}
        setIsModal={setIsModal}
        isModal={isModal}
      />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableHistoryBill;
