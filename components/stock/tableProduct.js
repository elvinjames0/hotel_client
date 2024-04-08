import { Table, Tooltip, Button, message, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { convertToVnd } from "@/controller/convertToVnd";
import { stockService } from "@/services/stockService";
import FormAddProduct from "./formAddProduct";
import Modal from "../modal";

const columns = [
  {
    title: "ID",
    dataIndex: "product_id",
    key: "product_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Type",
    dataIndex: "product_type",
    key: "product_type",
    render: (type) => {
      switch (type * 1) {
        case 0:
          return <Tag color={"green"}>Beverage</Tag>;
        case 1:
          return <Tag color={"cyan"}>Food</Tag>;
        case 2:
          return <Tag color={"gold"}>Other</Tag>;
      }
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>{convertToVnd(text)}</p>,
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
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

const TableProduct = ({ isModal, setIsModal }) => {
  const [data, setData] = useState([]);
  let fetch = () => {
    stockService
      .getAllProduct()
      .then((res) => {
        let dataRaw = res.data.data.map((e) => {
          return {
            ...e,
            action: {
              onDelete: () => {
                stockService
                  .deleteProduct(e.product_id)
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
        setData(dataRaw);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <FormAddProduct setIsModal={setIsModal} isModal={isModal} fetch={fetch} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableProduct;
