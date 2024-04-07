import React from "react";
import { Form, Input, Select, message } from "antd";

import ButtonCustom from "@/components/button";
import { employeeService } from "@/services/employeeService";

const UpdateForm = ({ isModal, setIsModal, data }) => {
  console.log("data: ", data);
  const onFinish = async (values) => {
    try {
      setIsModal(false);
      message.success("Update successfully!");
      await employeeService.updateEmployee(data.employee_id, {
        ...values,
        role_id: values.role_id * 1,
        base_salary: values.base_salary * 1,
        cccd: values.cccd * 1,
        phone: values.phone * 1,
      });
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
        className="text-white"
      >
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label={<p className="text-white">Full Name</p>}
            initialValue={data?.fullname}
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Nguyễn Huy Thành" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">ID/Passport</p>}
            initialValue={data?.cccd}
            name="cccd"
            rules={[
              {
                required: true,
                message: "Please input your ID/Passport!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Username</p>}
            name="username"
            initialValue={data?.username}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="huythanhreceptionist" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Password</p>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
                pattern: RegExp(/^(?=.*\d).{6,}$/),
              },
            ]}
          >
            <Input.Password placeholder="•••••••••••" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Phone Number</p>}
            name="phone"
            initialValue={data?.phone}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="0777467444" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Role</p>}
            name="role_id"
            initialValue={data?.role_id}
          >
            <Select>
              <Select.Option defaultValue value="1">
                Manager
              </Select.Option>
              <Select.Option value="2">Receptionist</Select.Option>
              <Select.Option value="3">Security</Select.Option>
              <Select.Option value="4">Labor</Select.Option>
              <Select.Option value="5">Housekeeping</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Address</p>}
            name="address"
            initialValue={data?.address}
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input placeholder="123 Đường ABC, TP-HCM" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Gmail</p>}
            name="gmail"
            initialValue={data?.gmail}
            rules={[
              {
                required: true,
                message: "Please input your gmail!",
                type: "gmail",
              },
            ]}
          >
            <Input placeholder="huythanh@gmail.com" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Birthday</p>}
            name="date_of_birth"
            initialValue={data?.date_of_birth}
            rules={[
              {
                required: true,
                message: "Please input your birthday!",
                pattern: RegExp(
                  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
                ),
              },
            ]}
          >
            <Input placeholder="MM/DD/YYYY" />
          </Form.Item>
          <Form.Item
            initialValue={data?.base_salary}
            label={<p className="text-white">Salary</p>}
            name="base_salary"
            rules={[
              {
                required: true,
                message: "Please input your salary!",
              },
            ]}
          >
            <Input placeholder="10000000" />
          </Form.Item>
        </div>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Update Employee" />
        </div>
      </Form>
    </div>
  );
};
export default UpdateForm;
