import React from "react";
import { Form, Input, message } from "antd";
import ButtonCustom from "@/components/button";
import { stockService } from "@/services/stockService";
import { useRouter } from "next/router";
const FormCreateImport = ({ isModal, setIsModal }) => {
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      await stockService.addStockIn({
        ...values,
        employee_id: values.employee_id * 1,
      });
      message.success("Create successfully!");
      setIsModal(false);
      router.push("/storage/addToStorage");
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
            label={<p className="text-white">Employee ID</p>}
            name="employee_id"
            rules={[
              {
                required: true,
                message: "Please input your Employee ID!",
              },
            ]}
          >
            <Input placeholder="Number Id..." />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Description</p>}
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input placeholder="Describe something..." />
          </Form.Item>
        </div>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Create" />
        </div>
      </Form>
    </div>
  );
};
export default FormCreateImport;
