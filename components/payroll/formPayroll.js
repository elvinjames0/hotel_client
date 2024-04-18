import React from "react";
import { Form, Input, message } from "antd";
import ButtonCustom from "@/components/button";
import { payrollService } from "@/services/payrollService";
const FormPayroll = ({ isModal, setIsModal, fetch, data }) => {
  const onFinish = async (values) => {
    try {
      await payrollService.paySalary(
        {
          allowance: values.allowance * 1,
        },
        data
      );
      message.success("Update successfully!");
      setIsModal(false);
      fetch();
    } catch (error) {
      message.error(error.response.data.message);
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<p className="text-white">Allowance</p>}
          name="allowance"
          rules={[
            {
              required: true,
              message: "Please input your allowance!",
            },
          ]}
        >
          <Input placeholder="6666666" />
        </Form.Item>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Pay salary" />
        </div>
      </Form>
    </div>
  );
};
export default FormPayroll;
