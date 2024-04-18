import React from "react";
import { Form, Input, message } from "antd";
import { roomService } from "@/services/roomService";
import ButtonCustom from "../button";
import { useRouter } from "next/router";
const onFinish = async (values) => {
  const router = useRouter();
  try {
    await roomService
      .addRoomType({
        ...values,
        room_quantity: values.room_quantity * 1,
        price_by_day: values.price_by_day * 1,
        price_by_first_hour: values.price_by_first_hour * 1,
        price_by_next_hour: values.price_by_next_hour * 1,
      })
      .then((res) => {
        message.success("Create successfully!");
        router.push("/");
      })
      .catch((err) => {
        message.error("Fail");
      });
  } catch (error) {
    message.error(error.message);
  }
};
const onFinishFailed = (errorInfo) => {
  message.error(errorInfo);
};
const FormCreateRoom = () => (
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
        label="Type Name"
        name="type_name"
        rules={[
          {
            required: true,
            message: "Please input your room type!",
          },
        ]}
      >
        <Input placeholder="Type room" />
      </Form.Item>
      <Form.Item
        label="Room Quantity"
        name="room_quantity"
        rules={[
          {
            required: true,
            message: "Please input your room quantity!",
          },
        ]}
      >
        <Input placeholder="999" />
      </Form.Item>
      <Form.Item
        label="Price by day"
        name="price_by_day"
        rules={[
          {
            required: true,
            message: "Please input your price by day!",
          },
        ]}
      >
        <Input placeholder="300000" />
      </Form.Item>
      <Form.Item
        label="Price by first hour"
        name="price_by_first_hour"
        rules={[
          {
            required: true,
            message: "Please input your price by first hour!",
          },
        ]}
      >
        <Input placeholder="100000" />
      </Form.Item>
      <Form.Item
        label="Price by next hour"
        name="price_by_next_hour"
        rules={[
          {
            required: true,
            message: "Please input your price by next hour!",
          },
        ]}
      >
        <Input placeholder="30000" />
      </Form.Item>
    </div>
    <div className=" flex justify-end">
      <ButtonCustom color="blue" content="Create" />
    </div>
  </Form>
);
export default FormCreateRoom;
