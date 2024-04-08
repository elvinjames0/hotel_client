import React from "react";
import { Form, Input, Select, message } from "antd";
import ButtonCustom from "@/components/button";
import { stockService } from "@/services/stockService";
const FormAddProduct = ({ isModal, setIsModal, fetch }) => {
  const onFinish = async (values) => {
    try {
      await stockService.addProduct({
        ...values,
        product_type: values.product_type * 1,
        quantity: values.quantity * 1,
        price: values.price * 1,
      });
      message.success("Update successfully!");
      setIsModal(false);
      fetch();
    } catch (error) {
      message.error("Fail");
    }
  };
  const onFinishFailed = () => {};
  return (
    <div
      className={
        isModal
          ? "absolute-center w-1/2 border-2 shadow-2xl rounded-lg p-6 text-white"
          : "hidden"
      }
      style={{ backgroundColor: "#001529" }}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label={<p className="text-white">Product Name</p>}
            name="product_name"
            rules={[
              {
                required: true,
                message: "Please input your product name!",
              },
            ]}
          >
            <Input placeholder="Sting..." />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Quantity</p>}
            name="quantity"
            rules={[
              {
                required: true,
                message: "Please input your product quantity!",
              },
            ]}
          >
            <Input placeholder="100" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Price</p>}
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price product!",
              },
            ]}
          >
            <Input placeholder="50000" />
          </Form.Item>

          <Form.Item
            initialValue="0"
            label={<p className="text-white">Type</p>}
            name="product_type"
          >
            <Select>
              <Select.Option defaultValue value="0">
                Beverage
              </Select.Option>
              <Select.Option value="1">Food</Select.Option>
              <Select.Option value="2">Other</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Add Product" />
        </div>
      </Form>
    </div>
  );
};
export default FormAddProduct;
