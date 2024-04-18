import { Table, Tooltip, Button, Tag, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { payrollService } from "@/services/payrollService";
import moment from "moment";
import Modal from "../modal";
import { convertToVnd } from "@/controller/convertToVnd";
import FormPayroll from "./formPayroll";
const columns = [
  {
    title: "ID",
    dataIndex: "payroll_id",
    key: "payroll_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "EMPLOYEE",
    key: "EMPLOYEE",
  },
  {
    title: "DOW",
    dataIndex: "day_of_work",
    key: "day_of_work",
  },
  {
    title: "Allowance",
    dataIndex: "allowance",
    key: "allowance",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Bonus",
    dataIndex: "total_bonus",
    key: "total_bonus",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Fine",
    dataIndex: "total_fine",
    key: "total_fine",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (type) => {
      switch (type) {
        case true:
          return <Tag color={"green"}>Paid</Tag>;
        case false:
          return <Tag color={"error"}>Unpaid</Tag>;
      }
    },
  },
  {
    title: "Date",
    dataIndex: "payroll_date_time",
    key: "payroll_date_time",
    render: (text) => <p>{moment(`${text}`).format("MM/DD/YYYY HH:MM:SS")}</p>,
  },
  {
    title: "Total Salary",
    dataIndex: "total_salary",
    key: "total_salary",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ onPaySalary }) => {
      return (
        <Tooltip title="Pay salary">
          <Button
            onClick={() => onPaySalary()}
            shape="circle"
            icon={<CheckOutlined />}
          />
        </Tooltip>
      );
    },
  },
];
const TablePayroll = () => {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [pay, setPay] = useState({});
  let fetch = () => {
    payrollService
      .getAllPayroll()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          if (e.status == false) {
            return {
              ...e,
              action: {
                onPaySalary: () => {
                  setIsModal(true);
                  setPay(e.payroll_id);
                },
              },
            };
          } else {
            return {
              ...e,
              action: {
                onPaySalary: () => {
                  message.error("Paid");
                },
              },
            };
          }
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
      <FormPayroll
        setIsModal={setIsModal}
        isModal={isModal}
        fetch={fetch}
        data={pay}
      />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TablePayroll;
