import React from "react";
import { Form, Input, Select, message } from "antd";
import ButtonCustom from "@/components/button";
import { roomService } from "@/services/roomService";
const FormUpdateRoom = ({ isModal, setIsModal, fetch, data }) => {
  const onFinish = async (values) => {
    try {
      await roomService.updateRoom({
        room_id: data.room_id * 1,
        room_type: values.room_type * 1,
        room_number: values.room_number * 1,
        balcony: values.balcony == "true" ? true : false,
        chair: values.chair == "true" ? true : false,
        fan: values.fan == "true" ? true : false,
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
    data && (
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
            room_number: data?.room_number,
            balcony: data?.balcony,
            chair: data?.chair,
            fan: data?.fan,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-3">
            <Form.Item
              label={<p className="text-white">Number</p>}
              name="room_number"
              rules={[
                {
                  required: true,
                  message: "Please input your room number!",
                },
              ]}
            >
              <Input placeholder="666" />
            </Form.Item>
            <Form.Item
              initialValue="1"
              label={<p className="text-white">Type</p>}
              name="room_type"
            >
              <Select>
                <Select.Option value="1">Standard</Select.Option>
                <Select.Option value="2">Superior</Select.Option>
                <Select.Option value="3">Deluxe</Select.Option>
                <Select.Option value="4">Suit</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              initialValue="true"
              label={<p className="text-white">Balcony</p>}
              name="balcony"
            >
              <Select>
                <Select.Option value="true">Yes</Select.Option>
                <Select.Option value="false">No</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              initialValue="true"
              label={<p className="text-white">Fan</p>}
              name="fan"
            >
              <Select>
                <Select.Option value="true">Yes</Select.Option>
                <Select.Option value="false">No</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              initialValue="true"
              label={<p className="text-white">Chair</p>}
              name="chair"
            >
              <Select>
                <Select.Option value="true">Yes</Select.Option>
                <Select.Option value="false">No</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className=" flex justify-end">
            <ButtonCustom color="blue" content="Update Room" />
          </div>
        </Form>
      </div>
    )
  );
};
export default FormUpdateRoom;
