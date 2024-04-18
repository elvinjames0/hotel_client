import React from "react";
import { Form, Input, Select, message } from "antd";
import { roomService } from "@/services/roomService";
import ButtonCustom from "../button";
const onFinish = async (values) => {
  try {
    await roomService
      .addRoom({
        room_type: values.room_type * 1,
        room_number: values.room_number * 1,
        balcony: values.balcony == "true" ? true : false,
        fan: values.fan == "true" ? true : false,
        chair: values.chair == "true" ? true : false,
      })
      .then((res) => {
        message.success("Create successfully!");
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
      <Form.Item initialValue="1" label="Type Room" name="room_type">
        <Select>
          <Select.Option value="1">Standard</Select.Option>
          <Select.Option value="2">Superior</Select.Option>
          <Select.Option value="3">Deluxe</Select.Option>
          <Select.Option value="4">Suit</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Room Number"
        name="room_number"
        rules={[
          {
            required: true,
            message: "Please input your room number!",
          },
        ]}
      >
        <Input placeholder="999" />
      </Form.Item>
      <Form.Item initialValue="true" label="Balcony" name="balcony">
        <Select>
          <Select.Option value="true">Yes</Select.Option>
          <Select.Option value="false">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item initialValue="true" label="Fan" name="fan">
        <Select>
          <Select.Option value="true">Yes</Select.Option>
          <Select.Option value="false">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item initialValue="true" label="Chair" name="chair">
        <Select>
          <Select.Option value="true">Yes</Select.Option>
          <Select.Option value="false">No</Select.Option>
        </Select>
      </Form.Item>
    </div>
    <div className=" flex justify-end">
      <ButtonCustom color="blue" content="Create" />
    </div>
  </Form>
);
export default FormCreateRoom;
