import React from "react";
import { Form, Input, Select, message } from "antd";
import ButtonCustom from "./button";
import { employeeService } from "@/services/employeeService";
const onFinish = async (values) => {
  try {
    await employeeService.addEmployee({
      ...values,
      role_id: values.role_id * 1,
      nationality: values.nationality * 1,
      base_salary: values.base_salary * 1,
      gender: values.gender == "true" ? true : false,
    });
    message.success("Create successfully!");
  } catch (error) {
    message.error("Fail");
  }
};
const onFinishFailed = (errorInfo) => {
  message.error(errorInfo);
};
const SignInForm = () => (
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
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input your name! min 6 characters",
            pattern: RegExp(/^.{6,}$/),
          },
        ]}
      >
        <Input placeholder="Nguyễn Huy Thành" />
      </Form.Item>
      <Form.Item
        label="ID/Passport"
        name="cccd"
        rules={[
          {
            required: true,
            message: "Please input your ID/Passport!",
            pattern: RegExp(/^.{12}$/),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username! min 6 characters",
            pattern: RegExp(/^.{6,}$/),
          },
        ]}
      >
        <Input placeholder="huythanhreceptionist" />
      </Form.Item>
      <Form.Item
        label="Password"
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
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
            pattern: RegExp(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/),
          },
        ]}
      >
        <Input placeholder="0777467444" />
      </Form.Item>
      <Form.Item initialValue="1" label="Nationality" name="nationality">
        <Select>
          <Select.Option value="1">Vietnamese</Select.Option>
          <Select.Option value="2">Chinese</Select.Option>
          <Select.Option value="3">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item initialValue="true" label="Gender" name="gender">
        <Select>
          <Select.Option value="true">Male</Select.Option>
          <Select.Option value="false">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item initialValue="1" label="Role" name="role_id">
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
        label="Address"
        name="address"
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
        label="Gmail"
        name="gmail"
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
        label="Birthday"
        name="date_of_birth"
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
        label="Salary"
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
      <ButtonCustom color="blue" content="Create" />
    </div>
  </Form>
);
export default SignInForm;
