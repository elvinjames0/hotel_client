import { Table, Tooltip, Button, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import moment from "moment";
import { convertToVnd } from "@/controller/convertToVnd";
import { expendituresService } from "@/services/expendituresService";

const columns = [
  {
    title: "ID",
    dataIndex: "expenditures_id",
    key: "expenditures_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Shift",
    dataIndex: "shift_detail_id",
    key: "shift_detail_id",
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
    title: "Date",
    key: "expenditures_date_time",
    dataIndex: "expenditures_date_time",
    render: (text) => <p>{moment(text).format("MM/DD/YYYY HH:MM:SS")}</p>,
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: ({ onDelete }) => {
      return (
        <Tooltip title="Delete">
          <Button
            onClick={() => onDelete()}
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      );
    },
  },
];

const TableExpenditures = () => {
  const [data, setData] = useState([]);
  let fetch = () => {
    expendituresService
      .getAllExpenditures()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          return {
            ...e,
            action: {
              onDelete: () => {
                expendituresService
                  .deleteExpenditures(e.expenditures_id)
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
        setData(dataRaw.reverse());
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetch();
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default TableExpenditures;
